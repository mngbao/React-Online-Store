import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();
export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    //Set total price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);

    //Decrease total quantity
    setTotalQuantities((prevTotal) => prevTotal + quantity);

    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setcartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const onRemove = (product) => {
    setTotalPrice((prevTotal) => prevTotal - product.price);

    //Increase total quantity
    setTotalQuantities((prevTotal) => prevTotal - 1);

    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setcartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setcartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setshowCart,
        cartItems,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
