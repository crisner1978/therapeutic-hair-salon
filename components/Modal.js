import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react/cjs/react.production.min";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import ApptForm from "./ApptForm";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto scrollbar-hide"
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 sm:px-4 pb-20 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser to center the modal contents */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="fixed inline-block bg-white rounded-md p-5 text-left overflow-hidden
                shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full "
            >
              <h1 className="text-xl font-semibold text-center">SCHEDULE YOUR APPOINTMENT</h1>
              <ApptForm />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
