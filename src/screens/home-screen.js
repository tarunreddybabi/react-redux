import { useEffect } from "react";
import { addToCart, fetchDataAction, removeItem } from "../redux/products/action";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);
  const cart = useSelector((state) => state.products.cart);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    dispatch(fetchDataAction());
  }

  function handleCart(item) {
    if (item.productInCart) {
      alert("Already in cart");
    } else {
      dispatch(addToCart(item));
    }
  }

  function handleRemove(item) {
    dispatch(removeItem(item));
  }

  return (
    <>
      <>{cart.length}</>

      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <>
          {productsList.map((elem) => (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
              <button onClick={() => handleCart(elem)}>
                {elem.productInCart ? "Added to cart" : "Add to cart"}
              </button>
            </div>
          ))}
        </>
      )}

      <h2>============================================================</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <button onClick={() => handleRemove(product)}>Remove item</button>
        </div>
      ))}
    </>
  );
};

export default HomeScreen;
