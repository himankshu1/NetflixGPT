import Header from "./Header";
import { LANDING_BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  return (
    <div>
      <Header />
      <img src={LANDING_BACKGROUND_IMAGE} alt="netflix-movies" />

      <form action="">
        <input
          className="px-4"
          type="email"
          placeholder="Email or phone number"
        />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
