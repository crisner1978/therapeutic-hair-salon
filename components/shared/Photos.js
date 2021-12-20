import Image from "next/image";
import { useRouter } from "next/router";

const Photos = ({ images, nextCursor }) => {
  const { asPath } = useRouter();

  return (
    <section
      className={`flex flex-col items-center justify-center w-full flex-1 px-10 text-center lg:text-left pb-[90px] ${
        asPath === "/" ? "mt-20" : "-mt-32"
      }`}
    >
      <h1 className="text-3xl font-medium mb-11">OUR WORK</h1>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((item) => (
          <div key={item.id} className="relative h-[325px] w-[300px]">
            <Image src={item.image} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;

// const [images, setImages] = useState(defaultImages);
// const [nextCursor, setNextCursor] = useState(defaultNextCursor);

// async function handleMoreImages(e) {
//   e.preventDefault()
//   const results = await fetch("/api/search", {
//     method: "POST",
//     body: JSON.stringify({
//       nextCursor,
//     }),
//   }).then((res) => res.json());
//   const { resources, next_cursor: updatedNextCursor } = results;

//   const images = mapImageResources(resources);

//   setImages(prev => {
//     return [
//       ...prev,
//       ...images
//     ]
//   })
//   setNextCursor(updatedNextCursor)
// }

{
  /* If have more images we can use this and handleMoreImages function
      
      <div className="flex justify-center mt-10">
        <div
          onClick={handleMoreImages}
          className="cursor-pointer border border-black px-14 py-3 text-xl font-semibold 
          hover:bg-black hover:text-white transition-all transform ease duration-200 hover:inset-2"
        >
          LOAD MORE
        </div>
      </div> */
}
