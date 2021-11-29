import { ImFacebook } from "react-icons/im";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <div className="top-0 sticky bg-transparent z-50">
      <div className="flex items-center justify-between px-10 pt-16">
        <Dropdown />
        <div>
          <a
            href="https://www.facebook.com/Therapeutic-Hair-Salon-Scalp-Clinic-161112793917864"
            target="_blank"
          >
            <ImFacebook className="h-6 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
