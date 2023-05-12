import styled from "styled-components";
// import { motion } from "framer-motion";
export const Main = styled.main`
  width: 100%;
  overflow-y: hidden;
`;
export const HeroWrapper = styled.div`
  margin: 3% 3% 10% 3%;
  position: relative;

  div {
    background-image: url(https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-16//w/1543/IMAGE-landscape-fill-42c6ea09-bd64-48f7-bc81-511e960810ee-default_0.jpg?ts=1681747962418);
    background-size: cover;
    background-position: top left;
    height: 70vh;
  }
  p {
    margin-bottom: 20px;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 40px;
  }
  a {
    background-color: #0a0a0a;
    padding: 1rem 2rem;
  }
  svg {
    position: absolute;
    bottom: 3%;
    font-size: 3rem;
    cursor: pointer;
  }
  .left {
    left: 3%;
  }
  .right {
    right: 3%;
  }
`;

export const HeroText = styled.span`
  position: absolute;
  margin: 6%;
  padding: 10% 50% 10% 0;
`;

export const Wrapper = styled.div`
  padding: 0 5em;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5em 0;
`;

export const Text = styled.div`
  position: absolute;
  width: 100%;
  left: -75%;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;
  margin-right: 40%;
  background-color: #2d2d2d;
  color: #f5f5dc;
  display: flex;
  flex-direction: column;
  padding: 4em 2em;
  @media (max-width: 768px) {
    position: relative;
    margin-right: unset;
    left: unset;
    top: unset;
    transform: unset;
    margin-top: 2rem;
  }

  h2 {
    color: white;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  p {
    color: white;
  }
  a {
    margin-top: 1em;
    svg {
      margin-left: 1em;
    }
  }
`;

export const Photo = styled.div`
  position: relative;
  margin-left: 10em;
  @media (max-width: 768px) {
    margin-left: unset;
    display: flex;
    flex-direction: column-reverse;
  }
  span {
    background-color: #2d2d2d;
    color: #f5f5dc;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    position: absolute;
    bottom: -8%;
    right: -12%;
    @media (max-width: 768px) {
      display: none;
    }
  }
  height: 75%;
  img {
    height: 100%;
    @media (max-width: 768px) {
      height: 70%;
    }
  }
`;
