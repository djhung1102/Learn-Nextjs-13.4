"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useParams, useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

const ModalTicket = () => {
  const router = useRouter();

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
                  <div className="w-full px-10 max-w-3xl flex flex-col gap-y-3">
                    <h1 className="text-xl font-semibold">Ticket Page</h1>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum soluta
                      quaerat asperiores aspernatur tempore molestiae quae exercitationem eveniet
                      possimus, dolorem voluptatum quod amet. Nam, repellendus aut. Maiores, maxime
                      ipsa?
                    </span>

                    <button
                      className="px-4 py-2 rounded-lg bg-black text-white"
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      Next
                    </button>
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

export default ModalTicket;
