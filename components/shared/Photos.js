import Image from "next/image";

const Photos = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">

      <div className="relative h-[400px] w-[285px]">
        <Image src="/pictures/FullSizeR.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[375px] w-[285px]">
        {" "}
        <Image src="/pictures/IMG_0725.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[380px] w-[285px]">
        <Image src="/pictures/IMG_0694.jpg" layout="fill" objectFit="cover" />
      </div>
      
      <div className="relative -top-10 h-[405px] w-[285px]">
        {" "}
        <Image src="/pictures/IMG_0989.jpg" layout="fill" objectFit="cover" />
      </div>


      <div className="relative -top-16 h-[425px] w-[285px]">

        <Image src="/pictures/IMG_1027.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative -mt-20 h-[450px] w-[285px]">

        <Image src="/pictures/IMG_1194.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative -top-24 h-[425px] w-[285px]">

        <Image src="/pictures/IMG_1197.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative -top-20 h-[375px] w-[285px]">

        <Image src="/pictures/IMG_1201.jpg" layout="fill" objectFit="cover" />
      </div>


      <div className="relative -top-16 h-[375px] w-[285px]">

        <Image src="/pictures/IMG_1203.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[425px] w-[285px]">

        <Image src="/pictures/IMG_1230.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[425px] w-[285px]">

        <Image src="/pictures/IMG_1238.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[425px] w-[285px]">

        <Image src="/pictures/IMG_1353.jpg" layout="fill" objectFit="cover" />
      </div>


      <div className="relative h-[425px] w-[285px]">

        <Image src="/pictures/IMG_4757.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[425px] w-[285px]">

        <Image src="/pictures/IMG_4766.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Photos;
