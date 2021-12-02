import Banner from "../components/Banner";
import Image from "next/image";
import BookAppt from "../components/BookAppt";
import SalonHours from "../components/SalonHours";

const Book = () => {
  return (
    <div>
      <Banner>
        <Image
          src="http://res.cloudinary.com/dtram9qiy/image/upload/v1638294068/my-uploads/p7233rjdqsvjnkop2gdm.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          priority
        />
      </Banner>
      <section className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center lg:text-left pb-20 -mt-32">
        <h1 className="text-3xl font-medium">BOOKING WITH US</h1>
        <div className="mt-7 text-xl max-w-4xl">
          <p className="mb-6">
            Please note that we have a late cancellation & no-show policy:
            Please do not schedule appointments you cannot keep. You must notify
            us 24 hours in advance prior to your scheduled appointment time if
            you need to cancel your appointment. Late cancellations & NO Shows
            will be charged 100% of the scheduled service.
          </p>
        </div>
      </section>
      <BookAppt />
      <SalonHours />
    </div>
  );
};

export default Book;
