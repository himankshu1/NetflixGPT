import { useState, useRef, useEffect } from "react";
import { LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const HeaderLoggedIn = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  // Retrieving current user data from the redux store
  const userFromStore = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(userFromStore);

  // Signing out the user using firebase signOut API
  const handleSignOut = () => {
    console.log("clicked");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        console.log("user removed from store!");
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

  useEffect(() => {
    // Checking if the user is signed in and then updating the Redux store
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // if the user is signed in
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // If the user is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe to onAuthStateChanged when this component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center w-full px-8 py-1 bg-gradient-to-b from-black bg-black bg-opacity-15 absolute">
      <div className="flex gap-5 items-center">
        <img src={LOGO} alt="brand-logo" className="w-36" />
        <div className="text-white">
          <ul className="flex gap-5 text-sm">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
      </div>

      {/* nav profile and items */}
      <div className="flex gap-4 items-center text-white relative">
        <input
          type="search"
          placeholder="Tiles, people, genres"
          className="bg-black bg-opacity-70 px-4 py-1 border-0 focus:border-white"
        />
        <span>{userFromStore && userFromStore.displayName}</span>
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
  );
};

export default HeaderLoggedIn;
