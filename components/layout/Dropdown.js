import { Menu, Transition } from "@headlessui/react";
import { getProviders, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import MyLink from "../MyLink";
import { MenuItems } from "../shared/ListData";

function Dropdown() {
  const { data: session, status } = useSession();

  console.log(getProviders());

  console.log(session);
  const { asPath } = useRouter();

  return (
    <div className="w-60 -mt-1 -ml-1">
      <Menu as="div" className="relative inline-block text-left -rotate-1">
        <>
          <Menu.Button>
            <div
              className={`flex items-center ${
                asPath === "/dashboard" ||
                asPath === "/auth/signin" ||
                asPath === "/profile" ||
                asPath === "/scheduler"
                  ? "text-black"
                  : "text-white"
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
                asPath === "/dashboard" ||
                asPath === "/auth/signin" ||
                asPath === "/profile" ||
                asPath === "/scheduler"
                  ? "bg-black text-white"
                  : "bg-white bg-opacity-90 text-opacity-100 text-gray-900"
              } flex flex-col absolute w-60 inset-x-0 -left-1 -top-14 space-y-5 py-10 -mt-2 -ml-10 pl-[74px] h-96 
                focus:ring-0 outline-none border-none`}
            >
              <Menu.Button className="mt-6 -ml-7">
                <div
                  className={`flex items-center ${
                    asPath === "/dashboard" ||
                    asPath === "/auth/signin" ||
                    asPath === "/profile" ||
                    asPath === "/scheduler"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  <HiOutlineX
                    className={`mt-1 w-8 h-8 ${
                      asPath === "/dashboard" ||
                      asPath === "/auth/signin" ||
                      asPath === "/profile" ||
                      asPath === "/scheduler"
                        ? "text-white"
                        : "text-black"
                    }`}
                    aria-hidden="true"
                  />

                  <span className="text-[25px] font-semibold">MENU</span>
                </div>
              </Menu.Button>
              {session ? (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink active={active} href="/profile" name="profile" />
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink
                        active={active}
                        href="/dashboard"
                        name="dashboard"
                      />
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink
                        active={active}
                        href="/scheduler"
                        name="scheduler"
                      />
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <span
                        className={` ${
                          active
                            ? "ml-[5px] text-blue-600 font-semibold cursor-pointer"
                            : "hover:translate-x-[5px] transition-all transform ease-out duration-300"
                        }`}
                        onClick={() => signOut()}
                      >
                        LOGOUT
                      </span>
                    )}
                  </Menu.Item>
                </>
              ) : (
                MenuItems.map(({ href, name }, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <MyLink active={active} href={href} name={name} />
                    )}
                  </Menu.Item>
                ))
              )}
            </Menu.Items>
          </Transition>
        </>
      </Menu>
    </div>
  );
}

export default Dropdown;
