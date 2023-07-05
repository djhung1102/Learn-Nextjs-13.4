import React from "react";

export const metadata = {
  title: "Movie Detail",
  description: "Online marketplace",
};

export default function TicketLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}
