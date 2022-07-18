import { createGlobalStyle } from "styled-components";
import { colors } from "./_base/_settingColors.style";

export const GlobalStyle = createGlobalStyle`

    html, body {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        color: ${colors.lightBlack};
        background: ${colors.lightLavendar};
        
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        overflow-x: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
    }

    .serif {
        font-family: 'Ibarra Real Nova', serif;
    }

    ::-webkit-scrollbar { 
        display: none;
    }

    .light-mode-accent {
        background: ${colors.lightLavendar};
    }

    .dark-mode {
        background: ${colors.medBlack};
    }
`