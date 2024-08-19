'use client'

import { useContext, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from './stores/cartStore'
import { CartContext } from '../StoreContext'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import { placeholders } from '../types'
import { RiCloseCircleLine } from '@remixicon/react'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function SearchModel() {
  const {searchOpen, setSearchtOpen} = useContext(CartContext)
  const { cart, removeFromCart, clearCart, getTotalItems, getTotalPrice } = useCartStore();
  const [value, setValue] = useState("");
  return (
    <Dialog open={searchOpen} onClose={setSearchtOpen}  className="relative z-[9999]">
      <Dialog.Backdrop
        className="z-[999] fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-10"
        onClick={()=>setSearchtOpen(false)}
      />
      <div className="fixed inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <Dialog.Panel
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
                <div className='relative top-28 p-5 pb-10  w-full flex justify-center' >
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onSubmit={()=>console.log("clicked")}
                        onChange={()=>console.log("log")}
                    />
                </div>
            </Dialog.Panel>
          </div>
          <motion.div className='absolute top-[95%]  left-[50%] h-full'>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                d="M5 12l14 0"
                initial={{
                strokeDasharray: "50%",
                strokeDashoffset: "50%",
                }}
                animate={{
                strokeDashoffset: value ? 0 : "50%",
                }}
                transition={{
                duration: 0.3,
                ease: "linear",
                }}
            />
                <RiCloseCircleLine color='white' />
            </motion.div>
        </div>
      </div>
    </Dialog>
  )
}
