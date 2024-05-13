import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useState } from "react";
// import { GithubAuthProvider } from "firebase/auth/cordova";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHUbProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHUbProvider)
      .then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      setUser(loggedInUser);
    })
    .catch(error=> {
      console.log(error);
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
          Log Out
        </button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn} className="btn">
            Google Login
          </button>
          <button onClick={handleGitHubSignIn} className="btn">
            GitHub Login
          </button>
        </div>
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
