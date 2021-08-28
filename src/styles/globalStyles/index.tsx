import { colors } from "src/constants/colors";
import { fonts } from "src/constants/fonts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: ${fonts.weigth.regular};
  }

  body {
    color: ${colors.text};
    height: 100vh;
    background: ${colors.background};
  }
`;
