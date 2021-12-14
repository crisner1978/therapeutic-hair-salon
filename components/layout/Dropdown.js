import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MenuItems } from "../shared/ListData";
import MyLink from "../MyLink";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { HiOutlineX } from 'react-icons/hi'

function Dropdown() {
  const { user } = useUser();
  const { asPath } = useRouter();
  console.log(asPath);

  return (
    <div className="w-60 -mt-1 -ml-1">
      <Menu as="div" className="relative inline-block text-left -rotate-1">
        <>
        
          <Menu.Button>
            <div
              className={`flex items-center ${
                asPath === "/dashboard" ? "text-black" : 'text-white'
              }`}
            >
              <FaBars className="w-8 h-6" aria-hidden="true" />
              <span className="text-[25px] font-semibold">MENU</span>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-out duration-250 tansform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Menu.Items
              className={`${
                asPath === "/dashboard"
                  ? "bg-black text-white"
                  : "bg-white bg-opacity-90 text-opacity-100 text-gray-900"
              } flex flex-col absolute w-60 inset-x-0 -left-1 -top-14 space-y-5 py-10 -mt-2 -ml-10 pl-[74px] h-96 focus:ring-0 outline-none border-none`}
            >
              <Menu.Button className="mt-6 -ml-7">
                <div className={`flex items-center ${asPath === '/dashboard' ? 'text-white': 'text-black'}`}>
                  <HiOutlineX className={`mt-1 w-8 h-8 ${asPath === '/dashboard' ? 'text-white': 'text-black'}`} aria-hidden="true" />
                 
                  <span className="text-[25px] font-semibold">MENU</span>
                </div>
              </Menu.Button>
              {MenuItems.map(({ active, href, name }, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <MyLink active={active} href={href} name={name} />
                  )}
                </Menu.Item>
              ))}
              {!user ? (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={` ${
                        active
                          ? "ml-[5px] text-blue-600 font-semibold"
                          : "hover:translate-x-[5px] transition-all transform ease-out duration-300"
                      }`}
                      href="/api/auth/login"
                    >
                      LOGIN
                    </a>
                  )}
                </Menu.Item>
              ) : (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={` ${
                        active
                          ? "ml-[5px] text-blue-600 font-semibold"
                          : "hover:translate-x-[5px] transition-all transform ease-out duration-300"
                      }`}
                      href="/api/auth/logout"
                    >
                      LOGOUT
                    </a>
                  )}
                </Menu.Item>
              )}
            </Menu.Items>
          </Transition>
        </>
      </Menu>
    </div>
  );
}

export default Dropdown;
