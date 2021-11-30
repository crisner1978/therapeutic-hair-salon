import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import MyLink from "./MyLink";

function Dropdown() {
  return (
    <div className="w-56">
      <Menu as="div" className="relative inline-block text-left">
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
              <Menu.Items className="bg-gray-300 opacity-60 text-opacity-100 flex flex-col absolute w-56 inset-x-0 left-0 space-y-5 py-10 -ml-10 pl-[74px] h-80">
                <Menu.Item>
                  <MyLink href="/" name="Home" />
                </Menu.Item>
                <Menu.Item>
                  <MyLink href="/Services" name="Services" />
                </Menu.Item>
                <Menu.Item>
                  <MyLink href="/Gallery" name="Gallery" />
                </Menu.Item>
                <Menu.Item>
                  <MyLink href="/Book" name="Book" />
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
      </Menu>
    </div>
  );
}

export default Dropdown;
