import Banner from "../components/Banner";
import Image from "next/image";
import BookAppt from "../components/BookAppt";

const Book = () => {
  return (
    <div>
      <Banner>
        <Image
          src="http://res.cloudinary.com/dtram9qiy/image/upload/v1638294068/my-uploads/p7233rjdqsvjnkop2gdm.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          priority
        />
      </Banner>
      <BookAppt />
    </div>
  );
};

export default Book;
