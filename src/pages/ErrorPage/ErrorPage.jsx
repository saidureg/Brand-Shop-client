import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center space-y-4 my-24">
      <h1 className="text-3xl font-semibold">Oops!</h1>
      <p className="text-3xl font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-3xl font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-secondary">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
