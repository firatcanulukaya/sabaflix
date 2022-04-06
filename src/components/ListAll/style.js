import styled from "styled-components";
import {colors} from "../../assets/style/styled";

export const AllContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 10rem;
`

export const AllHeader = styled.h1`
  font-size: 1.5rem;
  color: ${colors.white};
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Netflix Sans", sans-serif;
`

export const ColSixty = styled.div`
  width: 80%;
  height: 100%;
  display: flex;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
`

export const ColForty = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
`