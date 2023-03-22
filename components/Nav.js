import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavItems, NavStyles } from "@/styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "@/lib/context";

export default function Nav() {
  const { showCart, setshowCart, totalQuantities } = useStateContext();

  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <div onClick={() => setshowCart(true)}>
          {totalQuantities > 0 && <span>{totalQuantities}</span>}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
}
