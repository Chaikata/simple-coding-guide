import { devDuels, supportedDevDuelLanguages } from "@/data/devDuels";
import Link from "next/link";

export default function DevDuelLanguagePage({ params }: { params: { language: string } }) {
  const { language } = params;

  const languageInfo = supportedDevDuelLanguages.find(
    (l) => l.slug === language
  );

  if (!languageInfo) {
    return <div className="p-10 text-white">Language not found</div>;
  }

  const duels = devDuels.filter((d) => d.language === language);

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">{languageInfo.name} Dev Duels</h1>
        <p className="mt-2 text-zinc-400">{languageInfo.description}</p>

        {/* FILTERS */}
        <div className="mt-6 flex flex-wrap gap-3">
          <select id="difficulty" className="bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm">
            <option value="all">All Difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select id="category" className="bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm">
            <option value="all">All Categories</option>
            <option value="functions">Functions</option>
            <option value="loops">Loops</option>
            <option value="arrays">Arrays</option>
            <option value="strings">Strings</option>
            <option value="sql">SQL</option>
          </select>
        </div>

        {/* LIST */}
        <div id="duel-list" className="mt-8 grid gap-6">
          {duels.map((duel) => (
            <Link
              key={duel.slug}
              href={`/dev-duel/${language}/${duel.slug}`}
              className="block rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-zinc-600 transition"
            >
              <h2 className="text-lg font-semibold">{duel.title}</h2>

              <div className="mt-2 flex gap-3 text-xs">
                <span className="text-yellow-400 uppercase">{duel.difficulty}</span>
                <span className="text-zinc-400">{duel.category}</span>
                <span className="text-zinc-500">{duel.estimatedTime}</span>
              </div>

              <p className="mt-2 text-sm text-zinc-400">
                {duel.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* FILTER SCRIPT */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const difficultyFilter = document.getElementById("difficulty");
          const categoryFilter = document.getElementById("category");
          const items = Array.from(document.querySelectorAll("#duel-list > a"));

          function applyFilters() {
            const diff = difficultyFilter.value;
            const cat = categoryFilter.value;

            items.forEach((item) => {
              const text = item.innerText.toLowerCase();

              const matchDiff = diff === "all" || text.includes(diff);
              const matchCat = cat === "all" || text.includes(cat);

              item.style.display = matchDiff && matchCat ? "block" : "none";
            });
          }

          difficultyFilter.addEventListener("change", applyFilters);
          categoryFilter.addEventListener("change", applyFilters);
        `,
        }}
      />
    </main>
  );
}