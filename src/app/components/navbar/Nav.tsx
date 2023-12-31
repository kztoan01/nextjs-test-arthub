
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition, Menu } from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    XMarkIcon,
    HeartIcon,
    PaintBrushIcon,
    BugAntIcon,
    BoltIcon,
    PhotoIcon,
    PencilIcon,
    SparklesIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
const products = [
    { name: 'Caricature', state: 'Caricature', description: 'Get a better understanding of your traffic', href: '#', icon: PaintBrushIcon },
    { name: 'Cartoon', state: 'Cartoon', description: 'Speak directly to your customers', href: '#', icon: BugAntIcon },
    { name: 'Figure', state: 'Figure', description: 'Your customers’ data will be safe and secure', href: '#', icon: PhotoIcon },
    { name: 'Gesture', state: 'Gesture', description: 'Connect with third-party tools', href: '#', icon: SparklesIcon },
    { name: 'Photorealism', state: 'Photorealism', description: 'Build strategic funnels that will convert', href: '#', icon: PencilIcon },
    { name: 'Scientific illustrations', state: 'Scientific illustrations', description: 'Build strategic funnels that will convert', href: '#', icon: BoltIcon },
    { name: 'Sketch', state: 'Sketch', description: 'Build strategic funnels that will convert', href: '#', icon: ChartPieIcon },
    { name: 'Technical', state: 'Technical', description: 'Build strategic funnels that will convert', href: '#', icon: CubeTransparentIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


const navigation = [
    { name: 'Dashboard', href: '#', current: true, link: '/instructordashboard/dashboard' },
    { name: 'Courses', href: '#', current: false, link: '/instructordashboard/courses' },
    { name: 'Student', href: '#', current: false, link: '/instructordashboard/student' },
    { name: 'Reports', href: '#', current: false, link: '/instructordashboard/reports' },
    { name: 'Performance', href: '#', current: false, link: '/instructordashboard/performance' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Nav() {
    const [banner, setBanner] = useState(true)
    const [users, setUsers] = useState()
    const [open, setOpen] = useState(false)
    let logStatus = '';
    let sigStatus = '';
    let userNavigation = []
    let user = {}
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const linkImg = 'https://storage.cloud.google.com/arthub-bucket/'

    userNavigation = [
        { name: "Tran Bao Toan", href: '#', link: '/account/setting' },
        { name: "kztoan01@gmail.com", href: '#', link: '/account/setting' },
        { name: 'Cart', href: '#', link: '/error' },
        { name: 'Wishlist Cart', href: '#', link: '/error' },
        { name: 'My Learning', href: '#', link: '/account/learning' },
        { name: 'Notifications', href: '#', link: '/account/notification' },
        { name: 'Account Settings', href: '#', link: '/account/setting' },
        { name: 'Purchase history', href: '#', link: '/account/purchase' },
    ]
    user = {
        name: "Tran Bao Toan",
        email: "kztoan01@gmail.com",
        imageUrl: "img",
    }
    const logo = require('../assets/ArtHub-only-logo.png');
    return (
        <>
        {banner == true ? <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" ></div>
          </div>
          <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" ></div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">ArtHub 2023</strong><svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Register for the course from August 22 - December 22 to receive the best deals.
            </p>
              <a href="#" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></a>
          </div>
          <div className="flex flex-1 justify-end">
            <button onClick={() => setBanner(false)} type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" data-testid="banner">
              <span className="sr-only">Dismiss</span>
              <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div> : <></>}
  
        <header className="bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ArtHub</span>
                <img className="h-8 w-auto" src="https://storage.cloud.google.com/arthub-bucket/ArtHub-only-logo.png" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 outline-0"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  Categories
                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>
  
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products?.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-purple-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
  
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Instructor
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                My Learning
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Explore
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900"
              >
                Notifications
              </a>
  
            </Popover.Group>
            <div className="flex lg:ml-6">
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
  
            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
              <a href="#" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon onClick={(e) => setOpen(true)}
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900 mr-5">
                {logStatus}
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                {sigStatus}
              </a>
            </div>

              <div>
                <div>
                  <Menu as="div" className="relative ml-3" data-testid="dropdown-image">
                    <div>
                      <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full  object-cover object-center" src="https://storage.cloud.google.com/arthub-bucket/toan.jpg" alt="" />
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a data-testid="menu-item"
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item>
                          {({ active }) => (
                              <a
                                href=""
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Log out
                              </a>
                           )}
                        </Menu.Item>
  
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
  
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">ArtHub</span>
                  <img
                    className="h-8 w-auto"
                    src="https://storage.cloud.google.com/arthub-bucket/ArtHub-only-logo.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Categories
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Instructor
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      My Learning
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Explore
                    </a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Notifications
                    </a>
                    {/* <div className="flex lg:ml-6"> */}
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                    {/* </div> */}
  
                    {/* Cart */}
                    {/* <div className="ml-4 flow-root lg:ml-6"> */}
                    <a href="#" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon onClick={(e) => setOpen(true)}
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                    {/* </div> */}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {logStatus}
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {sigStatus}
                    </a>
                  </div>
                  <div>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full  object-cover object-center" src='../assets/image/default.jpg' alt="" />
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                          <Menu.Item>
  
                            <a
                              href=""
                              className={classNames(
                                true ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign Out
                            </a>
  
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
         
        </header>
      </>
    )
}