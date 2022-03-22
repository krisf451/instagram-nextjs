import { useState } from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import mypic from '../assets/day_ryder.jpeg'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between bg-white lg:mx-auto">
        {/* Left */}
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="h-6 cursor-pointer md:hidden"
          />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn" />
            <div className="absolute -top-2 -right-0 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <div className="navBtn h-10 cursor-pointer">
            <Image
              src={mypic}
              alt="profile pic"
              height={40}
              width={40}
              className="rounded-full"
              objectFit="contain"
            />
          </div>
          {/* TODO: Get hamburger menu working */}
          {isNavOpen && (
            <div className="flex items-center">
              <HomeIcon className="h-10 w-10" />
              <div className="relative">
                <PaperAirplaneIcon className="h-10 w-10" />
                <div className="absolute -top-2 -right-0 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
