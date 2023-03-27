import { useState } from "react";
import { useRouteError } from "react-router-dom";
import Error from "../components/error/Error";
const ErrorPage = () => {
  let error: any = useRouteError();
  console.log(error);
  let errorCode;
  let errorMessage;
  if (error.status === 404) {
    errorCode = "Error code 404";
    errorMessage = "Page not found.";
  }
  if (error.status === 500) {
    errorCode = `Error code ${error.status}`;
    errorMessage = error.message;
  }
  return <Error errorCode={errorCode} errorMessage={errorMessage} />;
};

export default ErrorPage;
