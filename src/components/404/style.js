import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${colors.white};
  height: 100vh;
  font-family: "Netflix Sans", sans-serif;
  font-size: 5rem;
`;

export const NotFoundBack = styled.button`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primaryColor};
  border: 2px solid ${colors.primaryColor};
  border-radius: 5px;
  color: ${colors.white};
  font-size: 1.2rem;
  font-family: "Netflix Sans", sans-serif;
  padding: .5rem 1rem;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    background: none;
    color: ${colors.primaryColor};
  }
`;