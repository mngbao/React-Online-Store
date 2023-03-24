import { useStateContext } from "@/lib/context";
import {
  CartStyle,
  CartWrapper,
  Card,
  EmptyStyle,
  CardInfo,
  Checkout,
  Cards,
} from "@/styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Quantity } from "@/styles/ProductDetails";
import Link from "next/link";

const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

// payment

export default function Cart() {
  const {
    cartItems,
    setCartItems,
    setshowCart,
    onAdd,
    qty,
    setTotalQuantities,
    onRemove,
    totalPrice,
  } = useStateContext();

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setshowCart(false)}
    >
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 && (
          <EmptyStyle
            variants={card}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            <h1>You have more shoping to do </h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}

        <Cards variants={cards} initial="hidden" animate="show">
          {cartItems &&
            cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card variants={card} key={item.slug}>
                  <img
                    src={item.image.data.attributes.formats.thumbnail.url}
                    alt={item.title}
                  />
                  <CardInfo>
                    <h3>{item.title}</h3>
                    <h3>{item.price}</h3>
                    <Quantity>
                      <span>Quantity</span>
                      <button>
                        <AiFillMinusCircle onClick={() => onRemove(item)} />
                      </button>
                      <p>{item.quantity}</p>
                      <button>
                        <AiFillPlusCircle onClick={() => onAdd(item, 1)} />
                      </button>
                    </Quantity>
                  </CardInfo>
                </Card>
              );
            })}
        </Cards>

        {cartItems.length >= 1 && (
          <Checkout>
            <h3>Subtotal:{totalPrice.toFixed(2)}</h3>
            <Link href="/">
              <button
                onClick={() => {
                  setshowCart(false);
                  setCartItems([]);
                  setTotalQuantities(0);
                }}
              >
                Purchase
              </button>
            </Link>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
