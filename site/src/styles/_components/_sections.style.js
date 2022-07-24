import styled from "styled-components";
import { colors } from "../_base/_settingColors.style";
import { fontSizes, headingFontSizes, spacing } from "../_base/_settings.style";
import { FadeInUp } from "../_base/_settingsAnimations.style";
import { grayBorders } from "../_base/_settings.style";
import { mediaSizes } from "../_base/_settingsMedia.style";

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${spacing.xxLarge}rem;
    padding-bottom: ${spacing.xxLarge}rem;
    background: ${colors.medBlack};
`

export const SectionTitleStyle = styled.div`
    display: flex;
    align-items: bottom;
    justify-content: space-between;
    width: auto;
    border-bottom: ${grayBorders.thickest};
    
    h1 {
        margin: 0;
        font-size: ${headingFontSizes.large}rem;
        color: ${colors.gray};
        font-weight: 400;
        line-height: 90%;

        @media only screen and (max-width: ${mediaSizes.phone}) {
            &.longTxt {
                font-size: ${headingFontSizes.small}rem;
                line-height: ${headingFontSizes.medium}rem;
                margin-bottom: -${spacing.small}rem;
            }

            font-size: ${headingFontSizes.medium}rem;
        }
    }
`
export const SectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${spacing.large}rem ${spacing.medium}rem ${spacing.large}rem ${spacing.medium}rem;

    &.not-visible {
        opacity: 0;
    }
    
    &.visible {
        ${FadeInUp({
            nm:'exp-view-fadein', 
            duration:1.75, 
            distance:30,
        })};
    }
        
    .detail-button {
        margin-top: ${spacing.xSmall}rem;
        padding: 0;
        font-size: ${fontSizes.small}rem;
        background: transparent;
        border: 1px solid transparent;
        color: ${colors.gray};
        cursor: pointer;
        outline: none;
        transition-duration: 0.2s;
        text-align: left;
        width: fit-content;
    }

    .detail-button:hover {
        color: ${colors.medLavendar};
    }
`;