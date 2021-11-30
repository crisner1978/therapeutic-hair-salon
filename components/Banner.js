import Image from "next/image";

const Banner = ({ children }) => {
  return (
    <div className="relative h-[650px] md:h-[700px] xl:h-[750px] -top-44 right-0">
      {children}
      <Image
        src="/images/cellGradientBackground@2x.png"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <Image
          src="http://res.cloudinary.com/dtram9qiy/image/upload/v1638294355/my-uploads/wgx5qjm0wqefiyk88fsn.png"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          
        />
      <div className="absolute top-1/2 w-full text-center text-white">
        <h1 className="text-5xl md:text-[85px]">THERAPEUTIC</h1>
        <h2 className="text-xl md:text-3xl">HAIR SALON & SCALP CLINIC</h2>
      </div>
    </div>
  );
};

export default Banner;
