import styled from "styled-components";
import {colors} from "../../../assets/style/styled";

export const CategoriesContainer = styled.div`
  min-height: 2000px;
  position: relative;
`;

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
`;