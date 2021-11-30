import Banner from "../components/Banner";
import Image from "next/image";

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
    </div>
  );
};

export default Services;
