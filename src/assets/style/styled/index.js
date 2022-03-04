import styled from 'styled-components';

export const colors = {
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