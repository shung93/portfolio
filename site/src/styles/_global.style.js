import { createGlobalStyle } from "styled-components";
import { colors } from "./_base/_settingColors.style";
import { mediaSizes } from "./_base/_settingsMedia.style";

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

    html {
        font-size: 90%;

        @media only screen and (min-width: ${mediaSizes.lrgDesktop}) {
            font-size: 95%;
        }	

        @media only screen and (max-width: ${mediaSizes.tabletLandscape}) {
            font-size: 90%;
        }
            
        @media only screen and (max-width: ${mediaSizes.tabletPortrait}) {
            font-size: 85%;
        }

        @media only screen and (max-width: ${mediaSizes.phone}) {
            font-size: 65%;
        }
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