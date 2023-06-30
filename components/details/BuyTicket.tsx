"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const BuyTicket = () => {
  const params = useParams();
  const id = params.id;
  return (
    <div className="mt-4">
      <Link href={`/movie/${id}/ticket`}>
        <button className="px-4 py-2 bg-black text-white rounded-xl">Mua vé xem phim</button>
      </Link>
    </div>
  );
};

export default BuyTicket;
