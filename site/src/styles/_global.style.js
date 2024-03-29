import "@fontsource/montserrat";
import "@fontsource/ibarra-real-nova";

import { createGlobalStyle } from "styled-components";
import { colors } from "./_base/_settingColors.style";
import { mediaSizes } from "./_base/_settingsMedia.style";

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar { 
        display: none;
    }

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

    .links {
        a {
            text-decoration: none;
        }
    }

    .dark-mode {
        background: ${colors.medBlack};

        a:hover {
            color: ${colors.lightBlack};
        }
    }

    .light-mode {
        background: ${colors.lightLavendar};

        a:hover {
            color: ${colors.medGray};
        }
    }

    .no-select {
        -webkit-touch-callout: none;
          -webkit-user-select: none;
           -khtml-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
      }
`