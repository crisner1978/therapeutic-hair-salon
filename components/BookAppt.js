import Link from "next/Link";
import { useRouter } from "next/dist/client/router";

const BookAppt = () => {
  const { asPath } = useRouter();
  return (
    <section
      className={`flex flex-col items-center justify-center w-full flex-1 px-10  bg-black text-white text-center lg:text-left ${
        asPath === "/book" ? "py-10" : "pb-20 pt-[70px]"
      }`}
    >
      <h1 className="text-3xl font-medium">BOOK YOUR APPOINTMENT</h1>
      <div className="mt-7 text-lg max-w-4xl">
        <p className="mb-6">
          Give us a call to schedule your appointment - sometimes we don't
          answer the phone as we are busy with other clients. So, please leave a
          message and we will get back to you.
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
          <Link href="/team">
            <div className="cursor-pointer border border-white px-14 py-3 text-xl font-semibold hover:bg-white hover:text-black transition-all transform ease duration-200 hover:inset-2">
              BOOK TODAY
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookAppt;
