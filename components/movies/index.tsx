import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

async function getDataMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=7316d598ed080580adad536a5a893903",
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function Movies() {
  const data = await getDataMovies();
  console.log(data);
  return (
    <div className="w-full">
      <div className="w-full px-4">
        <div className="grid grid-cols-3 gap-x-3 gap-y-4">
          {data.results?.map((item: any) => (
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
    </div>
  );
}
