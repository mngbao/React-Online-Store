import styled from "styled-components";
import { motion } from "framer-motion";

export const Gallery = styled(motion.div)`
  margin: 0 6%;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;
export const GalleryText = styled.div`
  text-align: center;
  margin-bottom: 2em;
  h1 {
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const GalleryImages = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;
