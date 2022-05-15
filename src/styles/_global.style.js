import { createGlobalStyle } from "styled-components";
import { colors } from "./_base/_settings.style";

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        background: ${colors.lightLavendar};
        color: ${colors.black}
    }
`