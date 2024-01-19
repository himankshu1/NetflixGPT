import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Landing from "./Landing";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Checking if the user is signed in and then updating the Redux store
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if the user is signed in
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // If the user is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Body;
