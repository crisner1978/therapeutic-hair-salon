import Banner from "../components/shared/Banner";
import Image from "next/image";
import Photos from "../components/shared/Photos";
import BookAppt from "../components/BookAppt";
import GoogleMap from "../components/shared/GoogleMap";

const Gallery = () => {
  return (
    <div>
      <Banner>
        <Image
          src="https://res.cloudinary.com/dtram9qiy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1638240331/my-uploads/d7cwpoedtdpwlb8rnvgc.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
        />
      </Banner>
      <section className="h-full mb-96 flex flex-col items-center justify-center w-full flex-1 px-10 text-center lg:text-left pb-[90px] -mt-24">
      <h1 className="text-3xl font-medium mb-11">OUR WORK</h1>
        <Photos />
      </section>
      <BookAppt />
      <GoogleMap />
    </div>
  );
};

export default Gallery;
