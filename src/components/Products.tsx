import { useEffect } from "react";
import { add } from "../store/cartSlice";
import { fetchProdutcs } from "../store/productSlice";
import { useDispatch, useSelector } from "../store/hooks";

export interface IProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  timestamp: number;
}

const Products = () => {
  const dispatch = useDispatch();
  const { status, data: productsData } = useSelector((state) => state.product);

  useEffect(() => {
    /** --- Normal way to fetch data --- */
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProductsData(data);
    // };
    // fetchProducts();
    /** --- Redux way to fetch data --- */
    dispatch(fetchProdutcs());
  }, []);

  const handleAddProduct = (product: IProduct) => {
    dispatch(add({ ...product, quantity: 1 }));
  };

  if (status === "LOADING") {
    return (
      <div>
        <h3 style={{ fontSize: 20, fontWeight: "bold" }}>Loading ...</h3>
      </div>
    );
  }
  if (status === "ERROR") {
    return (
      <div>
        <h3 style={{ fontSize: 20, fontWeight: "bold" }}>
          Something went wrong !
        </h3>
      </div>
    );
  }

  return (
    <div className="productsWrapper">
      {productsData.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAddProduct(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
