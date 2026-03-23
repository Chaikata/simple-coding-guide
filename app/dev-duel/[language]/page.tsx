import { notFound } from "next/navigation";
import DevDuelLanguageClient from "@/components/dev-duel/DevDuelLanguageClient";
import { devDuels, supportedDevDuelLanguages } from "@/data/devDuels";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export function generateStaticParams() {
  return supportedDevDuelLanguages.map((language) => ({
    language: language.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { language: languageSlug } = await params;

  const language = supportedDevDuelLanguages.find(
    (item) => item.slug === languageSlug
  );

  if (!language) {
    return {
      title: "Dev Duel",
      description: "Coding challenges on DevNestGuide.",
    };
  }

  return {
    title: `${language.name} Coding Challenges | Dev Duel`,
    description: `Practice ${language.name} with guided coding challenges on DevNestGuide.`,
  };
}

export default async function DevDuelLanguagePage({ params }: Props) {
  const { language: languageSlug } = await params;

  const language = supportedDevDuelLanguages.find(
    (item) => item.slug === languageSlug
  );

  if (!language) {
    notFound();
  }

  const languageDuels = devDuels.filter(
    (duel) => duel.language === languageSlug
  );

  return (
    <DevDuelLanguageClient
      language={language.slug}
      languageName={language.name}
      languageDescription={language.description}
      duels={languageDuels}
    />
  );
}