import { Link } from "./Navigation.styled";
import { BiHomeSmile } from "react-icons/bi";
export const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <BiHomeSmile size="1.5em" />
      </Link>
      <Link to="tweets">Tweets</Link>
    </nav>
  );
};
