"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import { Dialog, Transition } from "@headlessui/react";
import { Divide } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MovieDetailModal = () => {
  const params = useParams();

  const router = useRouter();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=7316d598ed080580adad536a5a893903`,
    fetcher
  );

  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    void router.back();
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="max-w-3xl px-4">
                    <div className="relative">
                      {data?.poster_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                          alt=""
                          width={200}
                          height={200}
                          className="h-[400px] w-full rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-full h-[400px] bg-gray-400 rounded-lg"></div>
                      )}
                      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.0)] rounded-lg"></div>
                      <div className="absolute bottom-5 text-white font-semibold text-xl left-3">
                        <h2>{data?.title}</h2>
                        <span className="font-normal text-base mt-2">{data?.tagline}</span>
                        <div className="flex gap-x-3 mt-3">
                          {data?.genres.map((item: any) => (
                            <span
                              key={item.id}
                              className="text-sm border border-white rounded-full px-2 py-1"
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-base font-medium text-black line-clamp-3">
                      {data?.overview}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MovieDetailModal;
