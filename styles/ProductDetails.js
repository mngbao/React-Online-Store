import styled from "styled-components";

export const DetailsStyle = styled.div`
  margin: 0 5rem;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 1;
`;

export const ProductImage = styled.img`
  flex-basis: 1;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    padding: 1rem;
    font-size: 1.5rem;
  }

  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }

  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  background: var(--primary);
  padding: 1rem 2rem;
  width: 100%;
  color: white;
  margin-top: 2rem;
  cursor: pointer;
  border: none;
`;
