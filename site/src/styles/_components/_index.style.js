import styled from "styled-components";
import { colors } from "../_base/_settingColors.style";
import { fontSizes, headingFontSizes, spacing } from "../_base/_settings.style";
import { FadeInUp } from "../_base/_settingsAnimations.style";
import { mediaSizes } from "../_base/_settingsMedia.style";

export const IntroStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${spacing.none}rem ${spacing.medium}rem ${spacing.none}rem ${spacing.medium}rem;
    height: calc(${90}vh);
    position: relative;
`;

export const IntroBgText = styled.div`
    width: 100%;

    @media only screen and (max-width: ${mediaSizes.phone}) {
        position: absolute;
        bottom: 0;
        padding-bottom: ${spacing.small}rem;
    }

    ${FadeInUp({
        nm:'intro-text-fadein', 
        duration:1, 
        distance:25,
    })};

    h1 {
        margin: 0;
        font-weight: 300;
        font-size: calc(${headingFontSizes.xLarge}vw + 0.5em);
        line-height: 90%;
        color: ${colors.gray};
        pointer-events: none;
        text-align: right;
    }
`

export const IntroDescription = styled.div`
    position: absolute;
    bottom: 0;
    padding-bottom: ${spacing.small}rem;

    @media only screen and (max-width: ${mediaSizes.phone}) {
        margin-top: ${spacing.large}rem;
        position: static;
        bottom: auto;
    }

    ${FadeInUp({
        nm:'intro-text-fadein', 
        duration:1, 
        distance:25,
    })};

    h1 {
        color: ${colors.lightBlack};
        margin: ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem;
        text-indent: -0.4rem;    
        line-height: 90%;
        font-weight: 300;
        font-size: ${headingFontSizes.small}rem;
    }

    p {
        margin: ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem;
        font-size: ${fontSizes.xSmall}rem;
        color: ${colors.darkLavendar};
        ${FadeInUp({duration:1})};
    }
`