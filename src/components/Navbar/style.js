import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const Nav = styled.nav`
  background: linear-gradient(180deg, ${colors.secondaryColor}, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 20px 30px;
  transition: all 0.3s ease-in-out;

  &.active {
    background: ${colors.secondaryColor};
  }
`

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    gap: 0;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
    gap: 0;
  }

  @media only screen and (min-width: 900px) {
    width: auto;
    gap: 2rem;
  }

  img {
    width: 277px;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 600px) {
      width: 220px;
    }
    @media only screen and (min-width: 600px) {
      width: 230px;
    }
    @media only screen and (min-width: 1200px) {
      width: 277px;
    }
  }
`

export const NavHamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  img {
    display: none;
  }

  &.active {
    display: flex;
    justify-content: normal;
    align-items: center;
    flex-direction: column;
    padding-top: 3rem;
    gap: 1rem;
    background: ${colors.secondaryColor};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    opacity: 1;
    visibility: visible;
    z-index: 100;
    transition: all 0.3s ease-in-out;
    margin: 0;

    p {
      margin: 0 !important;
    }

    img {
      display: block;
    }

  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 900px) {
    display: block;
  }
`

export const NavLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-left: 30px;
  transition: all 0.3s ease-in-out;
  font-family: "Netflix Sans Medium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 31px;
  cursor: pointer;

  &:hover {
    color: ${colors.primaryColor};
  }

  ${
          props => {
            if (props.disabled) {
              return `
            cursor: not-allowed;
            color: ${colors.textPrimary};
            pointer-events: none;
            `
            }
          }
  };
`

export const MobileNavbarClose = styled.img`
  position: absolute;
  top: 2.1rem;
  left: 2rem;
  width: 35px !important;
`;

export const NavSearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`

export const NavInput = styled.input`
  width: 35%;
  height: 40px;
  border: 1px solid ${colors.whiteOpacity};
  border-radius: 21px;
  padding: 0 10px;
  font-family: "Netflix Sans Medium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 31px;
  color: ${colors.white};
  transition: all .2s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid ${colors.primaryColor};
    width: 100%;
  }
`

export const NavbarLogo = styled.img`
  cursor: pointer
`;