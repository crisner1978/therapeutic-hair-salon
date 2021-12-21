import Link from "next/dist/client/link";
import { workDays } from "./ListData";

const SalonHours = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center pt-20 pb-[70px]">
      <h1 className="text-3xl font-medium">SALON HOURS</h1>
      <div className="flex-col md:flex md:flex-row justify-between flex-wrap lg:flex-nowrap my-16 text-lg lg:max-w-5xl xl:max-w-6xl">
        {workDays.map(({ name, hours }, index) => (
          <div className="w-[172px] py-2" key={index}>
            <h3
              className={`${
                name == "MONDAY" || name === "SUNDAY"
                  ? "text-gray-400 font-semibold pb-2"
                  : "font-bold pb-2"
              }`}
            >
              {name}
            </h3>
            <span className={`${hours === "CLOSED" && "text-gray-400"}`}>
              {hours}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div
          className="cursor-pointer border border-black px-14 py-3 text-xl font-semibold w-[236.85px]
          hover:bg-black hover:text-white transition-all transform ease duration-200 hover:inset-2"
        >
          <Link href="/ourwork">OUR WORK</Link>
        </div>
      </div>
    </section>
  );
};

export default SalonHours;
