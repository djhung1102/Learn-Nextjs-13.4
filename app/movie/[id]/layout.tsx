import React from "react";

export const metadata = {
  title: "Movie Detail",
  description: "Online marketplace",
};

export default function DetailLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}
      {modal}
    </div>
  );
}
