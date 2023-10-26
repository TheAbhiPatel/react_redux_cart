import { IProduct } from "../components/Products";
import { add, decQty, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "../store/hooks";

const Cart = () => {
  const dispatch = useDispatch();
  let items1 = useSelector((state) => state.cart);
  const items = [...items1].sort((a, b) => a.timestamp - b.timestamp);

  const totalQty = items.reduce((acc, cur) => (acc += cur.quantity), 0);
  const totalPrice = items.reduce(
    (acc, cur) => (acc += cur.quantity * cur.price),
    0
  );

  const handleRemoveProduct = (productId: string) => {
    dispatch(remove(productId));
  };

  const handleIncQty = (product: IProduct) => {
    dispatch(add(product));
  };
  const handleDecQty = (product: IProduct) => {
    if (product.quantity > 1) {
      dispatch(decQty(product));
    }
  };

  const handleSaveProduct = (product: IProduct) => {};

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((item) => (
          <div key={item.id} className="cartCard">
            <img src={item.image} alt={item.title} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h5>{item.title}</h5>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button
                  onClick={() => handleDecQty(item)}
                  style={{ background: "orange" }}
                  className="btn"
                >
                  -
                </button>
                <h5>qty : {item.quantity}</h5>
                <button
                  onClick={() => handleIncQty(item)}
                  style={{ background: "green" }}
                  className="btn"
                >
                  +
                </button>
              </div>
            </div>
            <h5>{item.price}</h5>
            <button
              onClick={() => handleRemoveProduct(item.id)}
              className="btn"
            >
              remove
            </button>
            <button onClick={() => handleSaveProduct(item)} className="btn">
              Save
            </button>
          </div>
        ))}
      </div>
      {/* ----------> bottom chekcout button  <-------- */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Cart</h3>
        <div
          style={{
            display: "flex",
            width: "30%",
            // alignItems: "center",
            flexDirection: "column",
            background: "#e1e1e1",
            padding: 15,
          }}
        >
          <h3>Total items : {totalQty}</h3>
          <h3>Total Price : {totalPrice.toFixed(2)}</h3>
          <button className="btn">checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
