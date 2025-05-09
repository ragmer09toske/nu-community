'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import TicketDetails from '../TicketDetails'
import CTA from '../CallToAction'
import Footer from '../Footer'
import MentoShipPricing from '../LifeTimeMentorship'
import Nav from '../Shop/Nav'
import { useTheme } from "next-themes"
import Cart from '../Shop/Cart'
import { CartContext } from '../StoreContext'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import SearchModel from '../Shop/SearchModel'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const placeholders = [
    "Search course",
];
export default function Example() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchtOpen] = useState(false);
  useEffect(()=>{
    setTheme("light")
  },[])
  return (
    <CartContext.Provider value={{cartOpen, setCartOpen, searchOpen, setSearchtOpen}}>
        <div className="bg-white">
      {/* <Topnav /> */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className='relative top-28 p-5 pb-10 z-10' >
        <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onSubmit={()=>console.log("clicked")}
            onChange={()=>console.log("log")}
        />
      </div>
      <div className='py-10 mt-24 lg:mt-0 flex flex-col gap-5'>
        <MentoShipPricing />
        <MentoShipPricing />
        <MentoShipPricing />
      </div>
      <div className='z-[9999]'>
        <Cart />
        <SearchModel />
      </div>
      <Footer />
      </div>
      </CartContext.Provider>
  )
}
