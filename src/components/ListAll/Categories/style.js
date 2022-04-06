import styled from "styled-components";
import {colors} from "../../../assets/style/styled";

export const CatSticky = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  top: 8rem;
  margin-top: 50px;
  background: ${colors.secondaryAltColor};
  width: 100%;
  padding: 1rem 0 1rem 1rem;
  border-radius: 5px;
  margin-left: 2rem;
`;

export const CategoriesContainer = styled.div`
  min-height: ${props => props.height ? `${props.height}px` : "100vh"};
  position: relative;

  &.active {
    display: flex;
    background-color: ${colors.secondaryAltColor};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    ${CatSticky} {
      margin: 0 !important;
      width: 80%;
      position: relative;
      display: block;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
    min-height: 0;
  }
  @media only screen and (min-width: 600px) {
    display: none;
    min-height: 0;
  }
  @media only screen and (min-width: 1200px) {
    display: block;
    min-height: ${props => props.height ? `${props.height}px` : "100vh"};
  }
`;

export const CancelIcon = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 32px;
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
  @media only screen and (min-width: 600px) {
    display: block;
  }
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

export const CatStickyTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.white};
  font-family: "Netflix Sans", sans-serif;
`;

export const CatStickySubTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.white};
  font-family: "Netflix Sans", sans-serif;
`;

//Category
export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  background: ${colors.secondaryAltColor};
`;

export const CategoryArrow = styled.img`
  width: 24px;
  margin-right: 1rem;
`;

export const CategoryUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
`;

export const CategoryLi = styled.li`
  display: flex;
  align-items: center;
`;

export const CategoryItems = styled.span`
  font-size: 1.2rem;
  color: ${colors.white};
  font-family: "Netflix Sans", sans-serif;
  cursor: pointer;
  opacity: .8;
  transition: all .3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &.active {
    color: ${colors.primaryColor};
  }
`;

export const CategoryButton = styled.button`
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