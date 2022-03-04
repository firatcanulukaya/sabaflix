import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const HeaderContainer = styled.section`
  height: 100vh;
  background: url(${props => props.bg}) no-repeat top center;
  box-shadow: inset 670px -81px 134px rgba(0, 0, 0, 0.6);
  background-size: cover;
  position: relative;
`

export const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: absolute;
  top: 30%;
  left: 5%;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1%;
`

export const HeaderContentImg = styled.img`
  width: 40%;
`

export const HeaderDesc = styled.h1`
  font-size: 22px;
  color: ${colors.textPrimary};
  margin-bottom: 1rem;
  font-family: "Netflix Sans", sans-serif;
  width: 50%;
`

export const HeaderButtonContainer = styled.div`
  width: 50%;
  display: flex;
  margin-top: 10px;
  gap: 40px;
`

export const HeaderBtn = styled.a`
  background: ${ p => p.opacity ?  colors.whiteOpacity : colors.white };
  color: ${p => p.opacity ? colors.white : colors.secondaryColor};
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 22px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "Netflix Sans Medium", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderBtnIcon = styled.img`
  width: 30px;
  margin-right: 10px;
`