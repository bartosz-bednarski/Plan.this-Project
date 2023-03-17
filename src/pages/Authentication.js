import Authentication from "../components/Authentication";
import app from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { redirect } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
const AuthenticationPage = () => {
  return <Authentication />;
};
// FIX DATABASE !!!!
export default AuthenticationPage;

export async function action({ request }) {
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
  };

  const auth = getAuth();
  if (mode === "register") {
    const registerAction = await createUserWithEmailAndPassword(
      auth,
      authData.email,
      authData.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
    if (registerAction) {
      // console.log(registerAction.uid);
      // const usersRef = collection(db, "users");
      // await setDoc(doc(usersRef, "id"), {
      //   name: "git",
      // });
      // try {
      //   const docRef = doc(db, "users", "xxxx");
      //   const id = { id: "xxxx" };
      //   setDoc(docRef, id);
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
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
      return redirect("/home");
    }
  }
}

export function addUserToDb() {}
