import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { redirect } from "react-router-dom";
import app from "./firebase";
export async function signOutUser() {
  const auth = getAuth();
  const action = await signOut(auth)
    .then(() => {
      console.log("signOut succes");
    })
    .catch((error) => {
      console.log("signOut error");
    });
  localStorage.removeItem("userId");
  return action;
}

export function getUserStatus() {
  const auth = getAuth(app);
  const status = onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      localStorage.setItem("userId", uid);
    }
    // if (user) {
    //   const uid = user.uid;
    //   console.log(uid)
    //   // ...
    // } else {
    //   redirect("/");
    // }
  });
  return status;
}

export function getUserId() {
  const userId = localStorage.getItem("userId");
  return userId;
}

export async function checkUserAuthentication() {
  const userId = getUserId();
  console.log(userId);
  if (!userId) {
    return redirect("/");
  }
  return null;
}
