import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

const navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="navbarItem">
          <Link to="/home">Home</Link>
        </li>
        <li className="navbarItem">
          <Link to="/mybooks">MyBooks</Link>
        </li>
        <li className="navbarItem carouselBtn">
          <Dropdown />
        </li>
        <li className="navbarItem">
          <Link to="/lastviewed">Last Viewed</Link>
        </li>
      </ul>
    </div>
  );
};
export default navbar;
