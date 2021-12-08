import { FaRegCopyright } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center text-center w-full bg-black">
      <section className="py-12">
        {/* Top */}
        <div className="text-white">
          <h2 className="text-4xl mb-1">THERAPEUTIC</h2>
          <h3 className="font-light text-sm">HAIR SALON & SCALP CLINIC</h3>

          {/* Middle */}
          <div className="py-8">
            <a
              href="https://www.facebook.com/Therapeutic-Hair-Salon-Scalp-Clinic-161112793917864"
              target="_blank"
            >
              <span className="flex justify-center italic">
                follow us on <ImFacebook className="h-6 w-8" />
              </span>
            </a>
          </div>

          {/* Bottom */}
          <div>
            <span className="flex justify-center items-center -mb-2">
              <FaRegCopyright className="h-6 mr-1 text-sm" />
              2021 Therapeutic
            </span>
            <span className="text-xs text-gray-400">
              made by{" "}
              <a
                className="text-blue-400"
                href="https://g.dev/chrisRisner"
                target="_blank"
              >
                g.dev/cr
              </a>
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
