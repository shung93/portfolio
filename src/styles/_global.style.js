import { createGlobalStyle } from "styled-components";
import { colors } from "./_base/_settingColors.style";

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    
    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        background: ${colors.lightLavendar};
        color: ${colors.lightBlack};
        overflow-x: hidden;
    }
`