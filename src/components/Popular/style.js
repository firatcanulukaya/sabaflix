import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const PopularContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem;
`

export const PopularHeader = styled.h1`
  color: ${colors.white};
  font-family: "Netflix Sans", sans-serif;
  font-size: 2rem;
  margin-bottom: 50px;
`

export const PopularOverflow = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`

export const PopularContent = styled.div`
  width: 100%;
  max-width: 20%;
  margin-left: 10rem;
  display: flex;
  justify-content: center;
  position: relative;
  transition: all 0.4s ease-in-out;
`

export const PopularContentContainer = styled.div`
  width: 200px;
  height: 300px;

  &::before {
    content: "${props => props.indexID + 1}";
    position: absolute;
    color: ${colors.secondaryColor};
    font-size: calc(0.74 * 40vmin);
    line-height: 0.7;
    bottom: 1rem;
    font-weight: bold;
    letter-spacing: -5vmin;
    left: 0;
    -webkit-text-stroke: 0.5vmin ${colors.white};
    text-shadow: 1vmin 0 4vmin ${colors.secondaryColor};
    transform: translate(-100%, 0);
    z-index: -1;
    font-family: "Netflix Sans", sans-serif;
  }
`

export const PopularImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`

export const SliderBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  z-index: 30;
  cursor: pointer;
   background: linear-gradient(180deg, ${colors.secondaryColor}, rgba(0, 0, 0, 0) 100%);
  
  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`

export const SliderBtnIcon = styled.img`
  width: 100%;
`

export const SliderBtnContainer = styled.div`
`