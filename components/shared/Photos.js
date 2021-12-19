import Image from "next/image";
import { useRouter } from "next/router";

const Photos = () => {
    const { asPath } = useRouter()
  return (
    <section className={`flex flex-col items-center justify-center w-full flex-1 px-10 text-center lg:text-left pb-[90px] ${asPath === '/' ? "mt-20" : "-mt-32"}`}>
      <h1 className="text-3xl font-medium mb-11">OUR WORK</h1>
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="relative h-[325px] w-[300px]">
          <Image
            src="/pictures/FullSizeR.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_0694.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          {" "}
          <Image src="/pictures/IMG_0725.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          {" "}
          <Image src="/pictures/IMG_0989.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_1027.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_1194.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_1197.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_1201.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_1203.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_1230.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_1238.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_1353.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_4757.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-[325px] w-[300px]">
          <Image src="/pictures/IMG_4766.jpg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default Photos;
