import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import LoadingDetail from "@/app/movie/[id]/loading";
import Image from "next/image";
import BuyTicket from "./BuyTicket";

export async function getDataMovieDetail(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7316d598ed080580adad536a5a893903`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
}
type Params = {
  params: {
    id: number;
  };
};

const MovieDetail = async ({ params: { id } }: Params) => {
  const data = await getDataMovieDetail(id);

  return (
    <Suspense fallback={<LoadingDetail />}>
      <div className="max-w-3xl px-4">
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt=""
            width={200}
            height={200}
            className="h-[400px] w-full rounded-lg object-cover"
          />
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.0)] rounded-lg"></div>
          <div className="absolute bottom-5 text-white font-semibold text-xl left-3">
            <h2>{data.title}</h2>
            <span className="font-normal text-base mt-2">{data.tagline}</span>
            <div className="flex gap-x-3 mt-3">
              {data.genres.map((item: any) => (
                <span key={item.id} className="text-sm border border-white rounded-full px-2 py-1">
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 text-base font-medium text-black line-clamp-3">{data.overview}</div>
        <BuyTicket />
      </div>
    </Suspense>
  );
};

export default MovieDetail;
