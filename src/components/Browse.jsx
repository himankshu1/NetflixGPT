import { useState, useRef } from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Browse = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Signing out the user using firebase signOut API
  const handleSignOut = () => {
    console.log("clicked");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    // Set a delay before hiding the dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 300); // Adjust the delay duration as needed
  };

  return (
    <div className="flex justify-between items-center w-full px-14 py-1 bg-gradient-to-b from-black bg-black bg-opacity-15">
      <div>
        <img src={LOGO} alt="brand-logo" className="w-36" />
      </div>

      <div className="flex items-center justify-between">
        {/* nav items menu */}
        <div className="-translate-x-64 text-white">
          <ul className="flex gap-5">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* nav profile and items */}
        <div className="flex gap-4 items-center text-white relative">
          <input
            type="search"
            placeholder="Tiles, people, genres"
            className="bg-black bg-opacity-70 px-4 py-1 border-0 focus:border-white"
          />
          <span>Children</span>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img
              src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQZLu3tbiSuiiDBp-icDwSRXAVSxEcUzCTRESSgt1RM8vzuAPshbi2d43p6m53ljhIGT4LEPJU4smKHqIN89iHxMOKFWJOc.png?r=93c"
              alt="profile-photo"
            />
            {isDropdownVisible && (
              <div className="absolute bg-black bg-opacity-70 px-4 py-4 border-2 border-white mt-2 -translate-x-24 w-40 text-sm">
                <ul className="flex flex-col gap-3">
                  <li>Manage Profiles</li>
                  <li>Account</li>
                  <li className="mb-2">Help Centre</li>
                  <button
                    className="bg-[#E50914] hover:bg-[#bd2525] duration-300 px-3.5 py-1.5"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
