import { createGlobalStyle } from "styled-components";
import { colors } from "./_base/_settingColors.style";

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        background: ${colors.lightLavendar};
        color: ${colors.black};
        overflow-x: hidden;
    }
`