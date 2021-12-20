import Image from "next/image";
import BookAppt from "../components/BookAppt";
import Banner from "../components/shared/Banner";
import GoogleMap from "../components/shared/GoogleMap";
import SalonServices from "../components/shared/SalonServices";

const Services = () => {
  return (
    <div className="">
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

export default Services;
