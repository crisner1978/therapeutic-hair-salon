import { ImFacebook } from "react-icons/im";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <div className="sticky bg-transparent z-50">
      <div className="flex items-center justify-between px-10 py-16">
        <Dropdown />
        <div>
          <a
            href="https://www.facebook.com/Therapeutic-Hair-Salon-Scalp-Clinic-161112793917864"
            target="_blank"
          >
            <ImFacebook className="h-6 w-8 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
