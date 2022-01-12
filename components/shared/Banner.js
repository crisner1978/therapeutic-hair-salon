import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = ({ children }) => {
  return (
    <section className="relative h-[600px] lg:h-[650px] xl:h-[750px] -top-44 right-0">
      {children}
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1639963844/hairSalonHeros/tndjyg87iw6nbrnfzspk.png"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1638294355/hairSalonHeros/wgx5qjm0wqefiyk88fsn.png"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
      <div className="absolute top-1/2 w-full text-center text-white">
        <h1 className="text-5xl lg:text-[85px]">THERAPEUTIC</h1>
        <h2 className="text-xl lg:text-3xl">HAIR SALON & SCALP CLINIC</h2>
      </div>
      <a
        href="/appointments"
        className="hidden md:flex flex-col text-right fixed py-[10px] pr-10 pl-6 text-xl text-white bg-black right-0 top-1/4 z-40"
      >
        <span className="font-semibold">901 323-0005</span>
        <span>BOOK ONLINE NOW</span>
      </a>
      <div className="flex items-center justify-center text-right fixed p-[10px] text-xl text-white bg-black right-0 top-0 z-50 md:hidden">
        <FaPhoneAlt className="text-base mr-2" />
        <a href="tel:9013239900" className="">
          <span className="font-semibold pr-[7px]">901 323-9900</span>
        </a>
      </div>
    </section>
  );
};

export default Banner;
