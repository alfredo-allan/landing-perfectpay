import React from "react";

interface CtaButtonProps {
  text: string;
  url: string;
}

export const CtaButton = ({ text, url }: CtaButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full sm:w-auto px-8 py-4 text-xl font-bold text-white bg-green-600 hover:bg-green-500 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse uppercase text-center"
    >
      {text}
    </a>
  );
};
