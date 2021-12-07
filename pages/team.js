import Banner from "../components/Banner";
import Image from "next/image";
import Staff from "../components/Staff";

const Team = () => {
  return (
    <div>
      <Banner>
        <Image
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1638294068/my-uploads/salon_tools.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          priority
        />        
      </Banner>
      <Staff />
    </div>
  );
};

export default Team;
