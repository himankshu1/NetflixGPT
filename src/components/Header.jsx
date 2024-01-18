import { LOGO } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="absolute z-10 flex justify-between items-center w-full px-32 py-1 bg-gradient-to-b from-black">
      {/* Logo */}
      <div>
        <Link to="/">
          <img className="top-4 left-4 w-44" src={LOGO} alt="logo" />
        </Link>
      </div>
      {path === "/login" ? (
        <></>
      ) : (
        <div className="absolute flex items-center space-x-4 top-4 right-4 pr-32">
          <select
            style={{
              border: "1px solid white", // White border
              background: "transparent", // Transparent background
              borderRadius: "4px",
            }}
            className="px-6 py-1 text-white rounded-sm"
            defaultValue="Language"
            name=""
            id=""
          >
            <option className="" value="language">
              English
            </option>
            <option className="text-black" value="language">
              हिंदी
            </option>
          </select>
          <Link to="/login">
            <button className="z-10 relative bg-[#E50914] hover:bg-[#bd2525] duration-300 px-3.5 py-1.5 text-white font-medium text-sm rounded-sm">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
