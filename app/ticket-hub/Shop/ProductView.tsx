"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ViewProductModel";
import Collections from "./ShopByCategory";
import ProductOverView from "./ProductOverView";

export function ProductView() {
  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className="p-5 w-full">
        {/* <h2 className="p-5  text-2xl font-bold text-gray-900">Courses</h2> */}
          <Collections />
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="bg-white">
            <ProductOverView />
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              View Cart
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}