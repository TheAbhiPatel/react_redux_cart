import { remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "../store/hooks";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleRemoveProduct = (productId: string) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((item) => (
          <div key={item.id} className="cartCard">
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button
              onClick={() => handleRemoveProduct(item.id)}
              className="btn"
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
