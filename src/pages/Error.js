import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  let error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>An error occured</h1>
    </div>
  );
};

export default ErrorPage;
