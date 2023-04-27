import styled from "styled-components";

export const ProductStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  div {
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    img {
      width: 100%;
      object-fit: cover;
      transition: all 0.5s ease-in-out;
    }
  }

  cursor: pointer;
  h2 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  :hover {
    img {
      transform: scale(1.1);
    }
  }
`;
