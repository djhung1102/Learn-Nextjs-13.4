import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { cache } from "react";
import NextPage from "./NextPage";
import MovieItem from "../movieItem.tsx";
import getQueryClient from "@/app/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import LoadingMovies from "@/app/loading";

export const getDataMovies = async (pageCount = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=7316d598ed080580adad536a5a893903&page=${pageCount}`
  );
  return res.json();
};

const Movies = async () => {
  // const data = await getDataMovies();

  // const queryClient = getQueryClient();
  // await queryClient.prefetchInfiniteQuery(["movies"], () => getDataMovies());
  // const dehydratedState = dehydrate(queryClient);

  // if (!data) {
  //   return null;
  // }

  return (
    // <Hydrate state={dehydratedState}>
    <Suspense fallback={<LoadingMovies />}>
      <MovieItem></MovieItem>
    </Suspense>
    // </Hydrate>
  );
};

export default Movies;
