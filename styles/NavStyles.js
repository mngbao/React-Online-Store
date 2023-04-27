import styled from "styled-components";

export const NavStyles = styled.nav`
  padding: 0 6%;
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: relative;
  z-index: 10;
  overflow:hidden;
  a {
    font-size: 1.2rem;
  }
  color: black;
  background-color: #f2f2f2;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1); 
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.5rem;
  }
  span {
    background: #ff2626;
    color: white;
    width: 1.2rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    right: -10%;
    top: -20%;
    pointer-events: none;
  }
`;
