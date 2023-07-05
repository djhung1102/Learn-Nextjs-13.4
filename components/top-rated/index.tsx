import getQueryClient from "@/app/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import React from "react";
import TopRatedItem from "./TopRatedItem";

export const getDataMoviesTopRated = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=7316d598ed080580adad536a5a893903`
  );
  return res.json();
};

const TopRated = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["top"], () => getDataMoviesTopRated());
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <TopRatedItem />
    </Hydrate>
  );
};

export default TopRated;
