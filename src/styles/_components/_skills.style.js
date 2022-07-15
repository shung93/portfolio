import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";
import { FadeInUp } from "../_base/_settingsAnimations.style";

export const SkillStyleInner = styled.div`
    margin-top: ${spacing.small}rem;

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
`

export const SkillsList = styled.div`
    margin-top: ${spacing.small}rem;
    
    ul {
        display: flex;
        flex-direction: column;
        gap: ${spacing.small}rem;
        margin: 0;
        padding-left: ${spacing.xSmall}rem;
        font-weight: 300;
        font-size: ${fontSizes.large}rem;
        color: ${colors.gray};
    }

    li {
        list-style: none;
    }
`