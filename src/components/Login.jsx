import Header from "./Header";
import { LANDING_BACKGROUND_IMAGE } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState("signin");

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative">
      <Header />
      <div className="inset-0">
        <img src={LANDING_BACKGROUND_IMAGE} alt="netflix-movies" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* login form */}
      <form
        action=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-14 py-14 rounded-sm flex flex-col w-96 text-white bg-opacity-70"
      >
        <p className="text-white font-medium text-3xl mb-8">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        <div className="flex flex-col gap-3 mb-8">
          {isSignIn ? (
            <></>
          ) : (
            <input
              type="email"
              placeholder="Full Name"
              className="px-4 py-3 bg-[#333333] text-sm"
            />
          )}
          <input
            type="email"
            placeholder="Email or phone number"
            className="px-4 py-3 bg-[#333333] text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 bg-[#333333] text-sm"
          />
        </div>
        <button className="bg-[#E50914] hover:bg-[#bd2525] duration-300 px-4 py-3 top-1/2 text-white font-medium text-sm rounded mb-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="text-gray-400 flex justify-between text-xs items-center mt-0 mb-8">
          <div className="flex item-center">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <p>Need help?</p>
        </div>

        <div className="flex flex-col gap-4">
          {isSignIn ? (
            <p
              className="text-sm cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              <span className="text-gray-400">New to Netflix?</span> Sign up
              now.
            </p>
          ) : (
            <p
              className="text-sm cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              <span className="text-gray-400">Already registered?</span> Sign in
            </p>
          )}

          <p className="text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-500">Learn more.</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
