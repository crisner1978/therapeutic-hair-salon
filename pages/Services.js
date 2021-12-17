import Banner from "../components/shared/Banner";
import Image from "next/image";
import SalonServices from "../components/shared/SalonServices";
import GoogleMap from "../components/shared/GoogleMap";
import BookAppt from "../components/BookAppt";

const Services = () => {
  return (
    <div className="">
      <Banner>
        <Image
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1638240130/my-uploads/gcbrvddxafxmzbceifps.jpg"
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
