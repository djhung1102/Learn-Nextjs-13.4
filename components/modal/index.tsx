"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MovieDetailModal = () => {
  const params = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=7316d598ed080580adad536a5a893903`,
    fetcher
  );

  console.log("path ~ ", data);

  return (
    <div>
      <Dialog open>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MovieDetailModal;
