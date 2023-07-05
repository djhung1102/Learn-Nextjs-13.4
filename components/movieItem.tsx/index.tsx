"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getDataMovies } from "../movies";

const MovieItem = () => {
  const { data } = useInfiniteQuery(["movies"], () => getDataMovies(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  const cols = useMemo(() => {
    const items = data?.pages?.reduce((prev, curr) => {
      return [...(prev || []), ...(curr.results || [])];
    }, []);
    return items;
  }, [data]);

  return (
    <div className="w-full px-4 mb-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4">
        {cols?.map((item: any) => (
          <div key={item.id} className="flex flex-col gap-x-2">
            <Link href={`/movie/${item.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt=""
                width={200}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </Link>
            <h2 className="mt-3 font-semibold text-black">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieItem;
