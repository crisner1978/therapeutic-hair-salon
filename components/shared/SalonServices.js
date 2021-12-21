import { useRouter } from "next/router";
import { hairScalp } from "./ListData";

const SalonServices = () => {
  const { asPath } = useRouter();
  return (
    <section
      className={`flex flex-col items-center justify-center w-full flex-1 px-10 text-center lg:text-left pb-20  ${
        asPath === "/service"
          ? "bg-white text-black -mt-36 pt-4"
          : "bg-black text-white pt-10"
      } `}
    >
      <h1 className="text-3xl font-medium">THE SERVICES</h1>
      <div className="mt-10 text-xl max-w-4xl">
        <ul className="text-center space-y-5">
          {hairScalp.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SalonServices;
