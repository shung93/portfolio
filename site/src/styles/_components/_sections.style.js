import styled from "styled-components";
import { headingFontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";
import { FadeInUp } from "../_base/_settingsAnimations.style";

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${spacing.large}rem;
    padding-bottom: ${spacing.xxLarge}rem;
    background: ${colors.medBlack};
`

export const SectionTitleStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    border-bottom: 3px solid ${colors.lightGray};
    
    h1 {
        margin: 0;
        font-size: ${headingFontSizes.large}rem;
        color: ${colors.gray};
        font-weight: 400;
        line-height: 90%;
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
            distance:15,
        })};
    }
        
    .detail-button {
        margin-top: ${spacing.xSmall}rem;
        padding: 0;
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