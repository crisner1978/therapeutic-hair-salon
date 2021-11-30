import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MenuItems } from "./menuItems";
import MyLink from "./MyLink";

function Dropdown() {
  return (
    <div className="w-60">
      <Menu as="div" className="relative inline-block text-left -rotate-1">
        <>
          <Menu.Button>
            <div className="flex items-center text-white">
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
            <Menu.Items className="bg-white bg-opacity-90 text-opacity-100 text-gray-9 flex flex-col absolute w-60 inset-x-0 -left-1 -top-14 space-y-5 py-10 -mt-2 -ml-10 pl-[74px] h-96">
              <Menu.Button className="mt-6 -ml-7">
                <div className="flex items-center text-black">
                  <GrClose className="w-7 h-6" aria-hidden="true" />
                  <span className="text-[25px] font-semibold">MENU</span>
                </div>
              </Menu.Button>
              {MenuItems.map(({active, href, name}, index) => (
                <Menu.Item key={index}>
                {({ active }) => <MyLink active={active} href={href} name={name} />}
              </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      </Menu>
    </div>
  );
}

export default Dropdown;
