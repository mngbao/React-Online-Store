import { Wrapper, Text, Photo } from "@/styles/Hero";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
export default function Deals({ deals }) {
  const { title, description, image } = deals.attributes;
  return (
    <Wrapper>
      <Photo>
        <Text>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href="">
            Buy Now
            <HiOutlineArrowNarrowRight />
          </a>
        </Text>
        <img src={image.data.attributes.formats.medium.url} alt="" />
        <span>50%</span>
      </Photo>
    </Wrapper>
  );
}
