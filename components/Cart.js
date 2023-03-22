import { useStateContext } from "@/lib/context";
import {
  CartStyle,
  CartWrapper,
  Card,
  EmptyStyle,
  CardInfo,
  Checkout,
} from "@/styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Quantity } from "@/styles/ProductDetails";

export default function Cart() {
  const { cartItems, setshowCart, onAdd, qty, onRemove, totalPrice } =
    useStateContext();

  return (
    <CartWrapper onClick={() => setshowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>You have more shoping to do </h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems &&
          cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card key={item.slug}>
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
        {cartItems.length >= 1 && (
          <Checkout>
            <h3>Subtotal:{totalPrice}</h3>
            <button>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
