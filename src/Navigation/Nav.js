import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {

  return (
    <nav>
      <div className="nav">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search for facility."
        />
      </div>
      <p className="nav-title">Facility Audit Dashboard</p>
    </nav>
  );
};

export default Nav;