import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* sign in and sign out button will be toggle here. */}
      {user ? (
        <button onClick={handleGoogleSignOut} className="btn">
          Google Log Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="btn">
          Google Login
        </button>
      )}

      {user && (
        <div>
          <h3>User:{user?.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
          <p>phone: {user.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
