import Authentication from "../components/Authentication";
import app from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { redirect } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
const AuthenticationPage = () => {
  return <Authentication />;
};
export default AuthenticationPage;

export async function action({ request }: any) {
  const db = getFirestore(app);
  console.log(app);
  console.log(db);
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "register";
  if (mode !== "login" && mode !== "register") {
    console.log("Bad mode");
  }
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
    name: data.get("name"),
  };

  const auth = getAuth();
  if (mode === "register") {
    const registerAction = await createUserWithEmailAndPassword(
      auth,
      authData.email,
      authData.password
    )
      .then((userCredential) => {
        return fetch(
          `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userCredential.user.uid}/bio.json `,
          {
            method: "POST",
            body: JSON.stringify({
              userId: userCredential.user.uid,
              name: authData.name,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
    if (registerAction) {
      return redirect("?mode=login");
    }
  }
  if (mode === "login") {
    const loginAction = await signInWithEmailAndPassword(
      auth,
      authData.email,
      authData.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.toJSON());
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
    if (loginAction) {
      return loginAction;
    } else {
      return redirect("/auth/tasks");
    }
  }
}

export function addUserToDb() {}
