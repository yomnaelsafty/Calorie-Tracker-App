import { Link } from "react-router-dom";
import { useNavigateAfterCount } from "../utils/hooks/index.js";

const HOME_LINK = "/";

export function ErrorPage() {
  const counter = useNavigateAfterCount(10, HOME_LINK);

  return (
    <>
      <h1>Something went wrong.......</h1>
      <p>Redirecting to Home Page in {counter}</p>
      <p>
        or Click <Link to={HOME_LINK}> Home Page </Link> to go back
      </p>
    </>
  );
}
