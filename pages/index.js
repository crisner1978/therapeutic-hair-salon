import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import Banner from "../components/Banner";
import BookAppt from "../components/BookAppt";
import Photos from "../components/Photos";
import SalonHours from "../components/SalonHours";
import SalonServices from "../components/SalonServices";
import Staff from "../components/Staff";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Therapeutic Hair Salon & Scalp Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner>
        <Image
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1638239490/my-uploads/inrjo2lmlyin9gdtgvy6.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
        />
      </Banner>
      <main>
        <section className="flex flex-col items-center justify-center w-full flex-1 px-10 pb-10 -mt-32 text-center lg:text-left">
          <h1 className="text-3xl font-medium">HOME</h1>
          <div className="mt-7 text-xl max-w-4xl">
            <p className="mb-10">
              Therapeutic is a Memphis based hair salon and scalp clinic, our
              clinicians specialize in keeping your hair and scalp healthy. From
              professional haircuts, creative coloring, hair and scalp repair
              treatments, special occasion services and wig styling, our
              talented master clinicians truly love what they do. Our services
              are offered to men, women and children of all ethnic backgrounds.
            </p>
            <div className="flex justify-center">
              <Link href="/team">
                <div className="cursor-pointer border border-black px-14 py-3 text-xl font-semibold hover:bg-black hover:text-white transition-all transform ease duration-200 hover:inset-2">
                  GET TO KNOW US
                </div>
              </Link>
            </div>
          </div>
        </section>
        <SalonServices />
        <SalonHours />
        <BookAppt />
        <Photos />
        <Staff />
      </main>
    </div>
  );
}
