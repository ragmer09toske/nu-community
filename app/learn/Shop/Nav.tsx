
'use client'
import { MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FloatingDockMobile } from './FloatingNav'
import useMobile from '@/app/Mobile'
import { useCartStore } from './stores/cartStore'
import { useContext } from 'react'
import { CartContext } from '../StoreContext'

export default function Example() {
  const isMobile = useMobile()
  const { cart } = useCartStore();
  const {cartOpen, setCartOpen} = useContext(CartContext)

  return (
    <div className="w-full z-[9999]">
      {isMobile &&(<div className='p-3.5 fixed -bottom-40 z-[9999]'>
        <FloatingDockMobile />    
      </div> )}
      {/* Mobile menu */}
      <header className="relative w-full">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free Mentorship on orders over M10,000
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="" >
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="/nu.png"
                    width={25}
                    height={20}
                    // className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                  </a>
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6" onClick={()=>setCartOpen(true)}>
                  <div className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      // onClick={()=>setCartOpen(true)}
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-2.5 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-300 to-transparent my-8 h-[1px] w-full" />
        </nav>
      </header>
    </div>
  )
}
