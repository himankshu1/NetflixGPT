import Header from "./Header";
import { LANDING_BACKGROUND_IMAGE } from "../utils/constants";

const Landing = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute inset-0">
        <img src={LANDING_BACKGROUND_IMAGE} alt="netflix-movies" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-0 mr-0 flex flex-col gap-4 items-center text-white w-3/4">
        <h1 className="font-extrabold text-4xl">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-xl mb-2">Watch anywhere. Cancel anytime.</p>
        <p className="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex gap-2 items-center justify-center w-7/12">
          <input
            className="px-4 py-3 border-slate-300 w-8/12 bg-opacity-80"
            style={{
              border: "1px solid white", // White border
              background: "transparent", // Transparent background
              borderRadius: "4px",
            }}
            type="email"
            placeholder="Email address"
            required
          />
          <button
            className="bg-[#E50914] hover:bg-[#bd2525] duration-300 px-4 py-4 text-white font-medium text-sm rounded"
            type="submit"
          >
            Get Started ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
