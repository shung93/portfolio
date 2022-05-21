import styled from "styled-components";
import { colors } from "../_base/_settingColors.style";
import { fontSizes, headingFontSizes, spacing } from "../_base/_settings.style";
import { mediaSizes } from "../_base/_settingsMedia.style";

export const IntroStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${spacing.none}rem ${spacing.medium}rem ${spacing.none}rem ${spacing.medium}rem;
    
`;

export const IntroBgText = styled.div`
    z-index: -1;
    width: 100%;
    font-size: calc(${headingFontSizes.xLarge}vw + 0.5em);
    line-height: 85%;
    color: ${colors.notWhite};
    opacity: 0.4;
    pointer-events: none;
    text-align: right;

    @media screen and (min-width: ${mediaSizes.desktop}) {
        font-size: calc(${headingFontSizes.large}vw + 0.5em);
    }
`

export const IntroTitleStyle = styled.h1`
    margin: ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem;
    text-indent: -0.4rem;    
    line-height: 90%;
    font-weight: 300;
    font-size: ${headingFontSizes.small}rem;

    @media screen and (min-width: ${mediaSizes.desktop}) {
        font-size: ${headingFontSizes.medium}rem;
    }
`;

export const IntroSubStyle = styled.p`
    margin: ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem;
    font-size: ${fontSizes.xSmall}rem;
    color: ${colors.darkLavendar};
`;