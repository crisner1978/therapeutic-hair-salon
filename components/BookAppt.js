import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const BookAppt = () => {
  const { asPath } = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <section
      className={`flex flex-col items-center justify-center w-full flex-1 px-10  bg-black text-white text-center lg:text-left ${
        asPath === "/book" ? "py-10" : "pb-20 pt-[70px]"
      }`}
    >
      <h1 className="text-3xl font-medium">BOOK YOUR APPOINTMENT</h1>
      <div className="mt-7 text-xl max-w-4xl">
        <p className="mb-6">
          All appointments can be booked online or you can give us a call to
          schedule schedule your appointment. If we don't answer the phone, we
          are busy with other clients. So, please leave a message and we will
          get back to you.
        </p>
        <p className="mb-6">
          Please be respectful of our time, if you can’t make your appointment
          please allow 24 hours to cancel.
        </p>
        <p className="mb-6">
          If you're unsure which services would be best suited for you, please
          don't hesitate to ask.
        </p>
        <div className="flex justify-center">
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer border border-white px-14 py-3 text-xl font-semibold 
          hover:bg-white hover:text-black transition-all transform ease duration-200 hover:inset-2"
          >
            BOOK TODAY
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppt;
