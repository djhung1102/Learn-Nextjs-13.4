import React from "react";

export const metadata = {
  title: "Movie Detail",
  description: "Online marketplace",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-between gap-x-4 text-lg text-blue-500 font-semibold">
        <span className="px-4 py-2">Facebook</span>
        <span className="px-4 py-2">Instagram</span>
        <span className="px-4 py-2">Twitter</span>
        <span className="px-4 py-2">Telegram</span>
      </div>
      <div className="border-b-2 border-gray-500 w-full"></div>
      {children}
    </div>
  );
}
