import styled from 'styled-components';

var colors = {
    "primaryColor": "#DB202C",
    "primaryAltcolor": "#831010",
    "secondaryColor": "#141414",
    "secondaryAltColor": "#221F1F",
    "gray": "#F5F5F1",
    "white": "#fff",
    "black": "#000",
    "btnBg": "#514C4E",
    "textPrimary": "#CDCDCD",
    "whiteOpacity": "rgba(255, 255, 255, 0.3)"
}

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ColFull = styled.div`
  width: 100%;
  max-width: 100%;
`

export const ColFifty = styled.div`
  width: 100%;
  max-width: 50%;
  min-height: 100vh;

  ${props => props.center && `
    display: flex;
    align-items: center;
    justify-content: center;
  `};

  @media only screen and(max-width: 600px) {
  width: 100%;
  max-width: 100%;
}

  @media only screen and (min-width: 600px) {
    width: 100%;
    max-width: 100%;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    max-width: 50%;
    height: 100vh;
  }
`

//Navbar
export const Nav = styled.nav`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0) 100%);
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 0 30px;
  
  @media only screen and (max-width: 600px) {
    height: 80px;
  }
  
  @media only screen and (min-width: 600px) {
    height: 80px;
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
`

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 30px;
  transition: all 0.3s ease-in-out;
  font-family: "Netflix Sans Medium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 31px;

  &:hover {
    color: ${colors.primaryColor};
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

//Header
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export const HeaderBg = styled.img`
height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`