import Authentication from "../components/Authentication";
import app from "../Firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const AuthenticationPage = () => {
  return <Authentication />;
};

export default AuthenticationPage;

export async function action({ request }) {
  const data = request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(authData.email, authData.password);
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(
      auth,
      authData.email,
      authData.password
    );
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage, error);
  }
}
