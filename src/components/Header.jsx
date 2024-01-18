import { LOGO, LANDING_BACKGROUND_IMAGE } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute z-10 flex justify-between items-center w-full px-32 py-1">
      <div className="bg-gradient-to-b from-black">
        <img className="top-4 left-4 w-44" src={LOGO} alt="logo" />
      </div>
      <div className="absolute flex items-center space-x-4 top-4 right-4 pr-32">
        <select
          style={{
            border: "2px solid #ccc", // White border
            background: "transparent", // Transparent background
            borderRadius: "6px",
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
        <button className="z-10 relative bg-[#E50914] px-6 py-2 text-white font-medium text-sm rounded">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
