import Banner from "../components/Banner";
import Image from "next/image";
import Staff from "../components/Staff";

const Team = () => {
  return (
    <div>
      <Banner>
        <Image
          src="http://res.cloudinary.com/dtram9qiy/image/upload/v1638294068/my-uploads/p7233rjdqsvjnkop2gdm.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
        />        
      </Banner>
      <Staff />
    </div>
  );
};

export default Team;
