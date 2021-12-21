import Image from "next/image";
import Head from "next/dist/shared/lib/head";
import BookAppt from "../components/BookAppt";
import Banner from "../components/shared/Banner";
import GoogleMap from "../components/shared/GoogleMap";
import SalonHours from "../components/shared/SalonHours";

const Book = () => {
  return (
    <div>
      <Head>
        <title>Book Appointment - Therapeutic Hair Salon & Scalp Clinic</title>
        <meta name="description" content="Book appointment for your hair service and scalp treatment care, service and/or treatment" />
        <meta property="og:title" title="Book Appointment - Therapeutic Hair Salon & Scalp Clinic - We specialize in hair care and scalp treatments along with hair and scalp products." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Banner>
        <Image
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1638294068/hairSalonHeros/salon_tools.jpg"
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
      <GoogleMap />
    </div>
  );
};

export default Book;
