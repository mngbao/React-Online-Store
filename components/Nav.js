import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavItems, NavStyles } from "@/styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "@/lib/context";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const { showCart, setshowCart, totalQuantities, cartItems } =
    useStateContext();

  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <div onClick={() => setshowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span initial={{ scale: 0.2 }} animate={{ scale: 1 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
}
