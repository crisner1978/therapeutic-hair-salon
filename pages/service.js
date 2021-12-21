import Image from "next/image";
import Head from "next/dist/shared/lib/head";
import BookAppt from "../components/BookAppt";
import Banner from "../components/shared/Banner";
import GoogleMap from "../components/shared/GoogleMap";
import SalonServices from "../components/shared/SalonServices";

const Service = () => {
  return (
    <div className="">
      <Head>
        <title>Services - Therapeutic Hair Salon & Scalp Clinic</title>
        <meta name="description" content="Services include hair and scalp treatments, products and care" />
        <meta property="og:title" title="Services - Therapeutic Hair Salon & Scalp Clinic - We specialize in hair care and scalp treatments along with hair and scalp products." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Banner>
        <Image
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1638240130/hairSalonHeros/gcbrvddxafxmzbceifps.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
        />
      </Banner>
      <SalonServices />
      <BookAppt />
      <GoogleMap />
    </div>
  );
};

export default Service;
