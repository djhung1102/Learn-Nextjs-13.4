"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getDataMoviesTopRated } from ".";

const TopRatedItem = () => {
  const { data } = useQuery(["top"], () => getDataMoviesTopRated(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  return (
    <div className="w-full px-4 mb-4 mt-4">
      <div className="grid grid-cols-3 gap-x-3 gap-y-4">
        {data?.results?.map((item: any) => (
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

export default TopRatedItem;
