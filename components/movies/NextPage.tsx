"use client";

import React, { useEffect, useState } from "react";
import { getDataMovies } from ".";

const NextPage = () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handleNextPage = () => {
      getDataMovies(page);
    };
    handleNextPage();
  }, [page]);

  console.log(page);

  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 rounded-lg bg-black text-white outline"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default NextPage;
