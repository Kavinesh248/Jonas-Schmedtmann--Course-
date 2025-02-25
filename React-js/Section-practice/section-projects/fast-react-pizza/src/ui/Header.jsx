import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = function () {
  return (
    <header>
      <Link to="/">Fast react pizza</Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
