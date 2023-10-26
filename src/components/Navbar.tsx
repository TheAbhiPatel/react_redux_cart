import { Link } from "react-router-dom";
import { useSelector } from "../store/hooks";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const totalQty = items.reduce((acc, cur) => (acc += cur.quantity), 0);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to={"/cart"}>
          Cart
        </Link>
        <span className="cartCount">Cart items: {totalQty}</span>
      </div>
    </div>
  );
};

export default Navbar;
