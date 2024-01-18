import Header from "./Header";
import { LANDING_BACKGROUND_IMAGE } from "../utils/constants";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-black opacity-50">
        <img src={LANDING_BACKGROUND_IMAGE} alt="netflix-movies" />
      </div>
      <div className="relative mx-auto flex flex-col items-center text-white">
        <h1 className="">Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div>
          <input type="email" placeholder="Email address" />
          <button type="submit">Get Started ➡️</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
