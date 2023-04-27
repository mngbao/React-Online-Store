import styled from "styled-components";

export const Foot = styled.div`
  background-color: #2d2d2d;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  .footer-links {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    transition: 0.1s ease-in-out;
    a {
      transition: 0.1s ease-in-out;
    }
    a:hover {
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
    }
  }
`;
