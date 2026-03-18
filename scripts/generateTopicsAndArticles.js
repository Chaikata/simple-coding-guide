import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: ".env.local" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const OUTPUT_DIR = path.join(process.cwd(), "data", "articles");

const CATEGORY_CONFIG = [
  {
    category: "javascript",
    stack: "JavaScript",
    subcategory: "errors",
  },
  {
    category: "sql",
    stack: "SQL",
    subcategory: "errors",
  },
  {
    category: "python",
    stack: "Python",
    subcategory: "errors",
  },
];

function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(input) {
  return String(input)
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function cleanJsonResponse(text) {
  return String(text || "")
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function extractTextFromResponse(response) {
  if (response?.output_text) return response.output_text;

  if (!Array.isArray(response?.output)) return "";

  return response.output
    .map((item) => {
      if (!Array.isArray(item?.content)) return "";
      return item.content.map((part) => part?.text || "").join("");
    })
    .join("")
    .trim();
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<pre><code>[\s\S]*?<\/code><\/pre>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeWhitespace(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSeoTitle(title) {
  return String(title)
    .replace(/^understanding\s+/i, "How to Fix ")
    .replace(/^guide to\s+/i, "How to Fix ")
    .replace(/^explained\s*/i, "")
    .trim();
}

function buildMetaDescriptionFromKeyword(keyword, stack) {
  return `Learn how to fix ${keyword} in ${stack} with practical examples and step-by-step solutions.`;
}

function dedupeStrings(values) {
  const seen = new Set();
  const result = [];

  for (const value of values || []) {
    const trimmed = String(value || "").trim();
    const normalized = trimmed.toLowerCase();
    if (!trimmed || seen.has(normalized)) continue;
    seen.add(normalized);
    result.push(trimmed);
  }

  return result;
}

function getExtraGuidance(title, slug, category, stack) {
  const lower = `${title} ${slug} ${category} ${stack}`.toLowerCase();

  if (lower.includes("syntax error near select")) {
    return `
Explain that the error is often caused by a mistake immediately before the SELECT keyword.
Include examples with missing commas, bad JOIN syntax, and misplaced parentheses.
Tell the user to inspect the previous line, not just the highlighted token.
Lead with the most likely fix.
`;
  }

  if (lower.includes("property does not exist on type")) {
    return `
Focus on JavaScript/TypeScript object typing mistakes.
Include one example with a missing interface property and one example with an incorrect API response assumption.
Show both broken and fixed code clearly.
Prioritize immediate fixes over theory.
`;
  }

  if (
    lower.includes("cannot read property") ||
    lower.includes("cannot read properties") ||
    lower.includes("undefined")
  ) {
    return `
Emphasize null/undefined access issues.
Include optional chaining and defensive checks in the fixes.
Use realistic frontend examples.
Keep the intro short and solution-first.
`;
  }

  if (lower.includes("is not a function")) {
    return `
Focus on calling a value that is not actually a function.
Include one example where a method name is misspelled and one where a variable shadows a function.
Show exactly how to inspect the real runtime value.
`;
  }

  if (lower.includes("unexpected token")) {
    return `
Explain that the reported token is often near the real issue, not always the true source.
Include examples with missing commas, brackets, or quotes.
Tell the reader to inspect the line before and surrounding syntax.
`;
  }

  if (lower.includes("sql")) {
    return `
Keep the article tightly focused on the exact SQL error.
Lead with the fastest likely fix.
Use realistic query examples.
Mention that the reported token may not always be the exact root cause.
`;
  }

  if (lower.includes("javascript") || lower.includes("typescript")) {
    return `
Keep the article tightly focused on the exact JavaScript or TypeScript error.
Lead with the fastest likely fix.
Use realistic frontend or API-related examples.
Avoid long theory sections.
`;
  }

  if (lower.includes("python")) {
    return `
Keep the article tightly focused on the exact Python error.
Lead with the fastest likely fix.
Use realistic examples a beginner would actually hit.
Avoid broad teaching sections.
`;
  }

  return `
Keep the article tightly focused on the exact error.
Lead with the most common fix.
Use at least two realistic broken/fixed code examples.
Keep explanations practical, short, and skimmable.
`;
}

function buildRelatedLinks(category, currentSlug) {
  const relatedByCategory = {
    javascript: [
      {
        anchor: 'How to Fix "Cannot Read Properties of Undefined" in JavaScript',
        targetSlug:
          "/javascript/errors/cannot-read-properties-of-undefined-in-javascript",
      },
      {
        anchor: 'How to Fix "Is Not a Function" in JavaScript',
        targetSlug: "/javascript/errors/is-not-a-function-javascript-fix",
      },
      {
        anchor: 'How to Fix "Unexpected Token" in JavaScript',
        targetSlug: "/javascript/errors/unexpected-token-javascript-fix",
      },
    ],
    sql: [
      {
        anchor: 'How to Fix "Missing FROM-Clause Entry" in SQL',
        targetSlug: "/sql/errors/missing-from-clause-entry-sql-fix",
      },
      {
        anchor: 'How to Fix "Unexpected Token" in SQL Queries',
        targetSlug: "/sql/errors/unexpected-token-sql-fix",
      },
      {
        anchor: 'How to Fix "Syntax Error Near SELECT" in SQL',
        targetSlug:
          "/sql/errors/sql-syntax-error-near-select-explained-with-examples",
      },
    ],
    python: [
      {
        anchor: 'How to Fix "Unexpected Indent" in Python',
        targetSlug: "/python/errors/unexpected-indent-python-fix",
      },
      {
        anchor: 'How to Fix "NameError" in Python',
        targetSlug: "/python/errors/nameerror-python-fix",
      },
      {
        anchor: 'How to Fix "TypeError" in Python',
        targetSlug: "/python/errors/typeerror-python-fix",
      },
    ],
  };

  return (relatedByCategory[String(category || "").toLowerCase()] || []).filter(
    (item) => item.targetSlug !== currentSlug
  );
}

function injectRelatedLinksSection(contentHtml, links) {
  if (!contentHtml || !Array.isArray(links) || links.length === 0) {
    return contentHtml;
  }

  const lower = contentHtml.toLowerCase();
  if (
    lower.includes("<h2>related errors</h2>") ||
    lower.includes("<h2>related guides</h2>")
  ) {
    return contentHtml;
  }

  const linksHtml = `
<h2>Related Errors</h2>
<ul>
  ${links
    .map(
      (link) => `<li><a href="${link.targetSlug}">${link.anchor}</a></li>`
    )
    .join("\n  ")}
</ul>`.trim();

  return `${contentHtml}\n${linksHtml}`;
}

async function ensureOutputDir() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

async function getExistingArticleFiles() {
  await ensureOutputDir();
  const files = await fs.readdir(OUTPUT_DIR);
  return files.filter((file) => file.endsWith(".json"));
}

async function readExistingArticles() {
  const files = await getExistingArticleFiles();
  const articles = [];

  for (const file of files) {
    try {
      const fullPath = path.join(OUTPUT_DIR, file);
      const raw = await fs.readFile(fullPath, "utf8");
      const parsed = JSON.parse(raw);
      articles.push(parsed);
    } catch {
      // ignore bad files
    }
  }

  return articles;
}

function buildExistingIndexes(articles) {
  const slugSet = new Set();
  const titleSet = new Set();
  const keywordSet = new Set();

  for (const article of articles) {
    if (article?.slug) slugSet.add(String(article.slug).toLowerCase());
    if (article?.title) titleSet.add(String(article.title).toLowerCase());
    if (article?.keyword) keywordSet.add(String(article.keyword).toLowerCase());
  }

  return { slugSet, titleSet, keywordSet };
}

async function generateTopics(existingArticles) {
  const existingTitles = existingArticles
    .map((a) => a?.title)
    .filter(Boolean)
    .slice(-200);

  const existingSlugs = existingArticles
    .map((a) => a?.slug)
    .filter(Boolean)
    .slice(-200);

  const prompt = `
You are helping generate SEO article topics for DevNestGuide, a developer website focused on practical error-fix guides.

IMPORTANT:
- Return ONLY valid JSON.
- Do NOT wrap the JSON in markdown fences.
- Do NOT return \`\`\`json.
- The JSON must be an array of topic objects.

GOAL:
Generate long-tail, search-intent-first article topics for developers searching for specific coding errors and fixes.

DO NOT generate broad tutorial topics like:
- JavaScript ES6 Features Tutorial
- DOM Manipulation Basics
- Python Basics
- SQL Joins Explained

ONLY generate topics that are error/fix/problem solving oriented.

Each topic object must look exactly like this:
{
  "title": "How to Fix \\"...\\" in JavaScript",
  "keyword": "exact search phrase",
  "category": "javascript",
  "stack": "JavaScript",
  "slug": "javascript-errors-example-slug"
}

Allowed categories:
- javascript
- sql
- python

Requirements:
- Focus on exact errors, warnings, exception messages, or debugging problems
- Each title should be SEO-friendly and specific
- Mix beginner and intermediate search intent
- Avoid duplicates or near-duplicates
- Prefer issues people actually search for
- Slugs should not start with a slash
- Slugs should follow this format:
  - javascript/errors/...
  - sql/errors/...
  - python/errors/...

Return exactly 12 topics total:
- 4 javascript
- 4 sql
- 4 python

Avoid anything too similar to these existing titles:
${JSON.stringify(existingTitles, null, 2)}

Avoid anything too similar to these existing slugs:
${JSON.stringify(existingSlugs, null, 2)}
`;

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: prompt,
  });

  const rawText = extractTextFromResponse(response);
  const cleaned = cleanJsonResponse(rawText);

  let topics;
  try {
    topics = JSON.parse(cleaned);
  } catch (error) {
    console.error("Failed to parse topic JSON.");
    console.error("Raw model output:\n", rawText);
    throw error;
  }

  if (!Array.isArray(topics)) {
    throw new Error("Topic generator did not return an array.");
  }

  return topics;
}

function sanitizeTopics(rawTopics, existingIndexes) {
  const results = [];
  const localSlugSet = new Set();
  const localTitleSet = new Set();
  const localKeywordSet = new Set();

  for (const topic of rawTopics || []) {
    const title = normalizeSeoTitle(String(topic?.title || "").trim());
    const keyword = String(topic?.keyword || "").trim();
    const category = String(topic?.category || "").trim().toLowerCase();
    const stack =
      String(topic?.stack || titleCase(category) || "").trim() || "JavaScript";

    if (!title || !keyword || !category) continue;
    if (!["javascript", "sql", "python"].includes(category)) continue;

    const broadBadPatterns = [
      "tutorial",
      "basics",
      "beginner",
      "deep dive",
      "explained",
      "introduction to",
      "guide to javascript",
      "guide to sql",
      "guide to python",
      "features",
      "concepts",
      "best practices",
    ];

    const lowerTitle = title.toLowerCase();
    if (broadBadPatterns.some((pattern) => lowerTitle.includes(pattern))) {
      continue;
    }

    const slug =
      String(topic?.slug || "").trim() ||
      `${category}/errors/${slugify(keyword)}`;

    const normalizedSlug = slug.toLowerCase();
    const normalizedTitle = title.toLowerCase();
    const normalizedKeyword = keyword.toLowerCase();

    if (existingIndexes.slugSet.has(normalizedSlug)) continue;
    if (existingIndexes.titleSet.has(normalizedTitle)) continue;
    if (existingIndexes.keywordSet.has(normalizedKeyword)) continue;

    if (localSlugSet.has(normalizedSlug)) continue;
    if (localTitleSet.has(normalizedTitle)) continue;
    if (localKeywordSet.has(normalizedKeyword)) continue;

    localSlugSet.add(normalizedSlug);
    localTitleSet.add(normalizedTitle);
    localKeywordSet.add(normalizedKeyword);

    results.push({
      title,
      keyword,
      category,
      stack,
      slug,
    });
  }

  return results;
}

const ARTICLE_GENERATION_PROMPT = `
You are writing a highly practical SEO article for a developer tutorial website called DevNestGuide.

The goal is to create a page that ranks for long-tail error-based searches and genuinely helps a developer solve the problem fast.

IMPORTANT RULES:
- Write for search intent, not for a textbook.
- Do NOT sound like an AI content farm.
- Do NOT use fluffy intros.
- Do NOT over-explain obvious concepts.
- Do NOT write generic filler like "in today's programming world" or "developers often encounter".
- Do NOT repeat the title phrasing over and over.
- Keep the tone direct, useful, and human.
- The article should feel like a practical fix guide written by someone who has seen the error before.

ARTICLE GOALS:
- Solve the exact error fast
- Keep the user on the page
- Increase the chance of indexing and ranking
- Avoid thin, repetitive, templated AI content

OUTPUT FORMAT:
Return ONLY valid JSON in this exact shape:

{
  "title": "string",
  "description": "string",
  "slug": "string",
  "contentHtml": "string",
  "faq": [
    {
      "question": "string",
      "answer": "string"
    }
  ],
  "keywords": ["string", "string", "string"],
  "internalLinkSuggestions": [
    {
      "anchor": "string",
      "targetSlug": "string"
    }
  ]
}

CONTENT REQUIREMENTS:

The article must use this HTML structure inside contentHtml:

1. Start with a strong H1
2. Immediately follow with a short 2-3 sentence intro
3. Add a "Quick Fix" section near the top
4. Add a "Why this error happens" section
5. Add a "Common causes" section
6. Add at least 2 broken-code examples followed by corrected versions
7. Add a "How to prevent it" section
8. Add a "Related errors" section with internal link placeholders
9. End with a short conclusion

HTML RULES:
- Use semantic HTML only: h1, h2, h3, p, ul, ol, li, pre, code, a
- Do not wrap everything in div soup
- Use short paragraphs
- Use lists where helpful
- Use <pre><code> blocks for code
- Clearly label broken and fixed code examples
- Internal links should use relative paths like /javascript/errors/example-slug
- Do not include markdown fences
- Do not include commentary outside JSON

STYLE RULES:
- Be concise
- Be practical
- Be specific
- Use realistic examples
- Prefer "check the line before the error" style advice when relevant
- Do not write more than needed just to sound comprehensive
- Avoid generic motivational language
- Avoid robotic transitions

SEO RULES:
- Title must target the exact error query naturally
- Description must be compelling and clear
- The first 120 words should directly address the user's problem
- Include keyword variations naturally, not through stuffing
- Sections should be optimized for skimming

ANTI-AI-PATTERN RULES:
- Avoid starting every article the same way
- Do not always use the same sentence rhythm
- Do not always use exactly the same section wording if another variation fits better
- Keep structure consistent, but wording natural
- Make examples feel like real mistakes a developer would make

QUALITY BAR:
A frustrated developer who landed on this page should be able to understand the likely cause and fix within 20 seconds of reading the top of the article.

Now write an article for this topic:

TITLE: {{TITLE}}
SLUG: {{SLUG}}
CATEGORY: {{CATEGORY}}
ERROR KEYWORD: {{KEYWORD}}
LANGUAGE/STACK: {{STACK}}

Extra guidance for this specific article:
{{EXTRA_GUIDANCE}}
`;

function buildArticlePrompt(input) {
  const safeTitle = normalizeSeoTitle(input.title);
  const extraGuidance = getExtraGuidance(
    safeTitle,
    input.slug,
    input.category,
    input.stack
  );

  return ARTICLE_GENERATION_PROMPT.replace("{{TITLE}}", safeTitle)
    .replace("{{SLUG}}", input.slug)
    .replace("{{CATEGORY}}", input.category)
    .replace("{{KEYWORD}}", input.keyword)
    .replace("{{STACK}}", input.stack)
    .replace("{{EXTRA_GUIDANCE}}", extraGuidance);
}

async function generateArticle(topic) {
  const prompt = buildArticlePrompt(topic);

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: prompt,
  });

  const rawText = extractTextFromResponse(response);
  const cleaned = cleanJsonResponse(rawText);

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (error) {
    console.error(`Failed to parse article JSON for: ${topic.title}`);
    console.error("Raw model output:\n", rawText);
    throw error;
  }

  const fallbackDescription = buildMetaDescriptionFromKeyword(
    topic.keyword,
    topic.stack
  );

  const internalLinks =
    Array.isArray(parsed?.internalLinkSuggestions) &&
    parsed.internalLinkSuggestions.length > 0
      ? parsed.internalLinkSuggestions
      : buildRelatedLinks(topic.category, topic.slug);

  const contentHtml = injectRelatedLinksSection(
    String(parsed?.contentHtml || "").trim(),
    internalLinks
  );

  return {
    title: String(parsed?.title || topic.title).trim(),
    description: String(parsed?.description || fallbackDescription).trim(),
    slug: String(parsed?.slug || topic.slug).trim(),
    category: topic.category,
    subcategory: "errors",
    keyword: topic.keyword,
    stack: topic.stack,
    contentHtml,
    faq: Array.isArray(parsed?.faq) ? parsed.faq : [],
    keywords: Array.isArray(parsed?.keywords)
      ? dedupeStrings(parsed.keywords)
      : dedupeStrings([topic.keyword, topic.stack, topic.category]),
    internalLinkSuggestions: internalLinks,
    publishedAt: new Date().toISOString(),
  };
}

function articleHasEnoughValue(article) {
  const text = stripHtml(article?.contentHtml || "");
  if (text.length < 700) return false;

  const html = String(article?.contentHtml || "").toLowerCase();

  const requiredSignals = [
    "<h2>quick fix</h2>",
    "<h2>why this error happens</h2>",
    "<h2>common causes</h2>",
    "<h2>how to prevent it</h2>",
  ];

  for (const signal of requiredSignals) {
    if (!html.includes(signal)) return false;
  }

  const codeBlocks = (html.match(/<pre><code>/g) || []).length;
  if (codeBlocks < 2) return false;

  return true;
}

async function saveArticle(article) {
  const fullPath = path.join(OUTPUT_DIR, `${slugify(article.slug)}.json`);
  await fs.writeFile(fullPath, JSON.stringify(article, null, 2), "utf8");
}

async function run() {
  console.log("🚀 Starting generation...");

  const existingArticles = await readExistingArticles();
  const existingIndexes = buildExistingIndexes(existingArticles);

  const rawTopics = await generateTopics(existingArticles);
  const topics = sanitizeTopics(rawTopics, existingIndexes);

  if (topics.length === 0) {
    console.log("No new topics generated after duplicate filtering.");
    return;
  }

  for (const topic of topics) {
    try {
      console.log(`⚡ generating: ${topic.title}`);
      const article = await generateArticle(topic);

      if (!articleHasEnoughValue(article)) {
        console.log(`⏭ skipped low-value article: ${article.title}`);
        continue;
      }

      await saveArticle(article);
      console.log(`✅ saved: ${article.title}`);
    } catch (error) {
      console.error(`❌ failed: ${topic.title}`);
      console.error(error);
    }
  }

  console.log("🎉 Generation complete.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});