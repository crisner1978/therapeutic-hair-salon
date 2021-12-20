import Image from "next/image";
import BookAppt from "../components/BookAppt";
import Banner from "../components/shared/Banner";
import GoogleMap from "../components/shared/GoogleMap";
import Photos from "../components/shared/Photos";
import { mapImageResources, search } from "../lib/cloudinary";

const Gallery = ({ images, nextCursor }) => {
  return (
    <div>
      <Banner>
        <Image
          src="https://res.cloudinary.com/dtram9qiy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1638240331/hairSalonHeros/d7cwpoedtdpwlb8rnvgc.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          as="photos"
        />
      </Banner>
      <Photos images={images} nextCursor={nextCursor} />
      <BookAppt />
      <GoogleMap />
    </div>
  );
};

export default Gallery;

export async function getStaticProps() {
  const results = await search({
    expression: "folder=hairSalonGallery",
  });

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor: nextCursor || false,
    },
  };
}
