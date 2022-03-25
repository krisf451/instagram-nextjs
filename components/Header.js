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
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  return (
    <>
      <div className="sticky top-0 z-50 ml-2 mr-2 border-b bg-white shadow-sm">
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

          {/* Right Mobile */}
          <div className="flex-end flex items-center bg-white md:hidden">
            <div className="navBtn z-50 h-10 cursor-pointer">
              <Image
                src={mypic}
                alt="profile pic"
                height={40}
                width={40}
                className="rounded-full"
                objectFit="contain"
              />
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white py-2 pl-2 text-sm font-medium text-gray-700 focus:outline-none ">
                  <MenuIcon className={`h-8 w-8 md:hidden`} />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block items-center px-4 py-2 text-sm'
                          )}
                        >
                          <HomeIcon className="navBtn pr-2" />
                          Home
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'relative block items-center px-4 py-2 text-sm'
                          )}
                        >
                          <PaperAirplaneIcon className="navBtn pr-2" />
                          <div className="absolute top-2 right-20 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                            3
                          </div>
                          Notifications
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <PlusCircleIcon className="navBtn pr-2" />
                          Start A Post
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <UserGroupIcon className="navBtn pr-2" />
                          Friends
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <HeartIcon className="navBtn pr-2" />
                          Favorites
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Right Desktop Menu*/}
          <div className="hidden md:flex md:items-center md:justify-end md:space-x-4">
            <HomeIcon className="navBtn" />

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
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
