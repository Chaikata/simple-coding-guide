"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-700">
      <div className="flex items-center justify-between bg-zinc-800 px-4 py-2 text-xs uppercase text-gray-300">
        <span>{language}</span>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-gray-400 hover:text-white"
        >
          Copy
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
          fontSize: "0.9rem",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}