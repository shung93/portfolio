import styled from "styled-components";
import { colors } from "../_base/_settingColors.style";
import { fontSizes, headingFontSizes, spacing } from "../_base/_settings.style";
import { mediaSizes } from "../_base/_settingsMedia.style";
import { FadeInUp } from "../_base/_settingsAnimations.style";

export const IntroStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${spacing.none}rem ${spacing.medium}rem ${spacing.none}rem ${spacing.medium}rem;
    height: calc(${90}vh);
    position: relative;
`;

export const IntroBgText = styled.div`
    width: 100%;

    ${FadeInUp({
        nm:'intro-text-fadein', 
        duration:1, 
        distance:15,
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
    // @media screen and (min-width: ${mediaSizes.desktop}) {
    //     font-size: calc(${headingFontSizes.xLarge}vw + 0.5em);
    // };
    // @media screen and (min-width: ${mediaSizes.phone}) {
    //     h1 {
    //         font-size: calc(${headingFontSizes.large}vw + 0.5em);
    //     }
    // };
`

export const IntroDescription = styled.div`
    position: absolute;
    bottom: 0;
    padding-bottom: ${spacing.small}rem;

    ${FadeInUp({
        nm:'intro-text-fadein', 
        duration:1, 
        distance:15,
    })};

    h1 {
        color: ${colors.lightBlack};
        margin: ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem;
        text-indent: -0.4rem;    
        line-height: 90%;
        font-weight: 300;
        font-size: ${headingFontSizes.small}rem;

        @media screen and (min-width: ${mediaSizes.desktop}) {
            font-size: ${headingFontSizes.medium}rem;
        }
    }

    p {
        margin: ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem ${spacing.none}rem;
        font-size: ${fontSizes.xSmall}rem;
        color: ${colors.darkLavendar};
        ${FadeInUp({duration:1})};
    }
`