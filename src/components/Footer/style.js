import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const Footter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${colors.secondaryAltColor};
`

export const FootterText = styled.p`
  font-size: 1rem;
  padding: 7px 0;
  color: ${colors.white};
  font-family: "Netflix Sans", sans-serif;
`

export const FootterLink = styled.a`
  font-size: 1rem;
  padding: 7px 0;
  color: ${colors.whiteOpacity};
  font-family: "Netflix Sans", sans-serif;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${colors.white};
  }
`