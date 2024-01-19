import Header from "./Header";
import { LANDING_BACKGROUND_IMAGE } from "../utils/constants";
import { useRef, useState } from "react";
import validateForm from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState("signin");
  const navigate = useNavigate(); // use to navigate to another path
  // result - for storing the error message - validation error or firebase authentication
  const [result, setResult] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleAuthentication = () => {
    // validating the form data
    const result = validateForm(
      emailRef.current.value,
      passwordRef.current.value
    );
    setResult(result);

    // If the result is something means it has some error from validateForm.js
    if (result) return;

    // If the result has no value means null, then login or signup
    if (!isSignIn) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setResult(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signed in!");
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //   console.log(errorCode);
          //   console.log(errorMessage);
          // Not checking particularly if email or password is invalid to hide the specific field invalidity to make it confidential
          if (errorCode === "auth/invalid-credential") {
            setResult("Email or password is invalid!");
          }
        });
    }
  };

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

      {result && (
        <div className="z-30 fixed top-14 left-1/2 transform -translate-x-1/2 w-96 bg-[#E50914] text-white py-2 text-center rounded font-semibold bg-opacity-70">
          <p>{result}</p>
        </div>
      )}

      {/* login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
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
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 bg-[#333333] text-sm"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email or phone number"
            className="px-4 py-3 bg-[#333333] text-sm"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="px-4 py-3 bg-[#333333] text-sm"
          />
        </div>
        <button
          className="bg-[#E50914] hover:bg-[#bd2525] duration-300 px-4 py-3 top-1/2 text-white font-medium text-sm rounded mb-3"
          onClick={handleAuthentication}
        >
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
