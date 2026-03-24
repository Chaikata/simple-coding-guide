import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const DEV_DUELS_FILE = path.join(ROOT_DIR, "data", "devDuels.ts");
const GENERATED_FILE = path.join(ROOT_DIR, "generatedDevDuels.json");
const BACKUP_DIR = path.join(ROOT_DIR, "data", "backups");

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSlug(text) {
  return normalizeText(text).replace(/\s+/g, "-");
}

function normalizeStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item || "").trim()).filter(Boolean);
}

function normalizeDifficulty(value) {
  const difficulty = String(value || "").trim().toLowerCase();
  if (
    difficulty === "beginner" ||
    difficulty === "intermediate" ||
    difficulty === "advanced"
  ) {
    return difficulty;
  }
  return "";
}

function normalizeLanguage(value) {
  const language = String(value || "").trim().toLowerCase();
  if (
    language === "javascript" ||
    language === "python" ||
    language === "sql" ||
    language === "cpp"
  ) {
    return language;
  }
  return "";
}

function normalizeDevDuel(duel) {
  return {
    slug: String(duel.slug || "").trim(),
    title: String(duel.title || "").trim(),
    language: normalizeLanguage(duel.language),
    difficulty: normalizeDifficulty(duel.difficulty),
    category: String(duel.category || "general").trim().toLowerCase(),
    description: String(duel.description || "").trim(),
    prompt: String(duel.prompt || "").trim(),
    guidance: normalizeStringArray(duel.guidance),
    hints: normalizeStringArray(duel.hints),
    ...(duel.starterCode ? { starterCode: String(duel.starterCode) } : {}),
    ...(duel.expectedOutput
      ? { expectedOutput: String(duel.expectedOutput).trim() }
      : {}),
    concepts: normalizeStringArray(duel.concepts),
    estimatedTime: String(duel.estimatedTime || "10 minutes").trim(),
    ...(Array.isArray(duel.relatedTutorialSlugs)
      ? {
          relatedTutorialSlugs: normalizeStringArray(
            duel.relatedTutorialSlugs
          ),
        }
      : {}),
    ...(typeof duel.isFeatured === "boolean"
      ? { isFeatured: duel.isFeatured }
      : {}),
  };
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getTimestamp() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${yyyy}${mm}${dd}-${hh}${min}${ss}`;
}

function createBackupIfFileExists(filePath) {
  if (!fs.existsSync(filePath)) return null;

  ensureDir(BACKUP_DIR);

  const backupPath = path.join(
    BACKUP_DIR,
    `devDuels-${getTimestamp()}.ts.bak`
  );

  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

function extractDevDuelsArraySource(fileText) {
  const exportMarker = "export const devDuels";
  const startIndex = fileText.indexOf(exportMarker);

  if (startIndex === -1) {
    throw new Error("Could not find `export const devDuels` in data/devDuels.ts");
  }

  const equalsIndex = fileText.indexOf("=", startIndex);
  if (equalsIndex === -1) {
    throw new Error("Could not find = for devDuels export");
  }

  const arrayStart = fileText.indexOf("[", equalsIndex);
  if (arrayStart === -1) {
    throw new Error("Could not find opening [ for devDuels array");
  }

  let depth = 0;
  let inString = false;
  let stringChar = "";
  let escaped = false;

  for (let i = arrayStart; i < fileText.length; i++) {
    const char = fileText[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === stringChar) {
        inString = false;
        stringChar = "";
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === "[") depth++;
    if (char === "]") depth--;

    if (depth === 0) {
      return {
        start: arrayStart,
        end: i + 1,
        source: fileText.slice(arrayStart, i + 1),
      };
    }
  }

  throw new Error("Could not find closing ] for devDuels array");
}

function evaluateArraySource(arraySource) {
  try {
    return Function('"use strict"; return (' + arraySource + ");")();
  } catch (error) {
    throw new Error(`Failed to parse existing devDuels array: ${error.message}`);
  }
}

function getExistingDevDuelsAndFileText() {
  if (!fs.existsSync(DEV_DUELS_FILE)) {
    throw new Error("data/devDuels.ts was not found. Restore that file first.");
  }

  const fileText = fs.readFileSync(DEV_DUELS_FILE, "utf-8");
  const trimmed = fileText.trim();

  if (!trimmed) {
    throw new Error("data/devDuels.ts exists but is empty");
  }

  const arrayInfo = extractDevDuelsArraySource(fileText);
  const parsed = evaluateArraySource(arrayInfo.source);

  if (!Array.isArray(parsed)) {
    throw new Error("Existing devDuels export is not an array");
  }

  return {
    fileText,
    arrayInfo,
    devDuels: parsed.map(normalizeDevDuel),
  };
}

function readGeneratedDevDuels() {
  if (!fs.existsSync(GENERATED_FILE)) {
    throw new Error("generatedDevDuels.json was not found");
  }

  const raw = fs.readFileSync(GENERATED_FILE, "utf-8");

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`generatedDevDuels.json is invalid JSON: ${error.message}`);
  }

  if (!Array.isArray(parsed)) {
    throw new Error("generatedDevDuels.json must contain an array");
  }

  return parsed.map(normalizeDevDuel).filter((duel) => {
    if (!duel.slug || !duel.title) {
      console.log("Skipping invalid generated duel with missing slug/title");
      return false;
    }

    if (!duel.language) {
      console.log(`Skipping duel with invalid language: ${duel.title}`);
      return false;
    }

    if (!duel.difficulty) {
      console.log(`Skipping duel with invalid difficulty: ${duel.title}`);
      return false;
    }

    if (!duel.prompt || !duel.guidance.length || !duel.hints.length) {
      console.log(`Skipping incomplete generated duel: ${duel.title}`);
      return false;
    }

    return true;
  });
}

function writeDevDuelsFilePreservingStructure(fileText, arrayInfo, allDuels) {
  const updatedArray = JSON.stringify(allDuels, null, 2);
  const nextFileText =
    fileText.slice(0, arrayInfo.start) +
    updatedArray +
    fileText.slice(arrayInfo.end);

  const tempPath = `${DEV_DUELS_FILE}.tmp`;
  fs.writeFileSync(tempPath, nextFileText, "utf-8");
  fs.renameSync(tempPath, DEV_DUELS_FILE);
}

function run() {
  const generatedDevDuels = readGeneratedDevDuels();
  const {
    fileText,
    arrayInfo,
    devDuels: existingDevDuels,
  } = getExistingDevDuelsAndFileText();

  const existingSlugSet = new Set(
    existingDevDuels.map((duel) => normalizeSlug(duel.slug))
  );
  const existingTitleSet = new Set(
    existingDevDuels.map((duel) => normalizeText(duel.title))
  );

  const dedupedGenerated = [];
  const seenGeneratedSlugSet = new Set();
  const seenGeneratedTitleSet = new Set();

  for (const rawDuel of generatedDevDuels) {
    const duel = normalizeDevDuel(rawDuel);
    const normalizedSlug = normalizeSlug(duel.slug);
    const normalizedTitle = normalizeText(duel.title);

    if (!normalizedSlug || !normalizedTitle) {
      console.log("Skipping invalid generated duel with empty slug/title");
      continue;
    }

    if (existingSlugSet.has(normalizedSlug)) {
      console.log(`Skipping existing slug duplicate: ${duel.slug}`);
      continue;
    }

    if (existingTitleSet.has(normalizedTitle)) {
      console.log(`Skipping existing title duplicate: ${duel.title}`);
      continue;
    }

    if (seenGeneratedSlugSet.has(normalizedSlug)) {
      console.log(`Skipping generated slug duplicate: ${duel.slug}`);
      continue;
    }

    if (seenGeneratedTitleSet.has(normalizedTitle)) {
      console.log(`Skipping generated title duplicate: ${duel.title}`);
      continue;
    }

    seenGeneratedSlugSet.add(normalizedSlug);
    seenGeneratedTitleSet.add(normalizedTitle);
    dedupedGenerated.push(duel);
  }

  const allDevDuels = [...existingDevDuels, ...dedupedGenerated];

  const backupPath = createBackupIfFileExists(DEV_DUELS_FILE);
  writeDevDuelsFilePreservingStructure(fileText, arrayInfo, allDevDuels);

  console.log(`Imported ${dedupedGenerated.length} new Dev Duels`);
  console.log(`Total Dev Duels: ${allDevDuels.length}`);

  if (backupPath) {
    console.log(`Backup created: ${backupPath}`);
  }
}

run();