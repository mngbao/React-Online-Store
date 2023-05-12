import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "@/lib/query";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
  ProductImage,
} from "@/styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "@/lib/context";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { qty, setQty, increaseQty, decreaseQty, onAdd, cartItems } =
    useStateContext();

  useEffect(() => {
    setQty(1);
  }, [cartItems]);

  const notify = () => {
    toast.success(`${title} added to your cart`);
  };
  //fecth slug name
  const router = useRouter();
  const { slug } = router.query;

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p style={{ height: "100vh" }}>Loading...</p>;
  if (error) return <p>Oh noo... {error.message}</p>;
  const { title, description, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <ProductImage
        src={image.data.attributes.formats.medium.url}
        alt={title}
      />
      <img src="" alt="" />

      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>

        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(data.products.data[0].attributes, qty);
            notify();
          }}
        >
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
