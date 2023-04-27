import { HeroWrapper, HeroText } from "@/styles/Hero";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
export default function Hero() {
  return (
    <HeroWrapper>
      <div>
        <HeroText>
          <p>Black Friday in July</p>
          <h1>Up to 50% off</h1>
          <h2>Hundreds of styles available</h2>
          <a href="">Shop now</a>
        </HeroText>

        <HiOutlineArrowNarrowLeft className="left" />
        <HiOutlineArrowNarrowRight className="right" />
      </div>
    </HeroWrapper>
  );
}
