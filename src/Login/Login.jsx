import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">
        Google Login
      </button>
    </div>
  );
};

export default Login;
