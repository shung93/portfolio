import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

export const SkillStyleInner = styled.div`
    margin-top: ${spacing.small}rem;
    // text-align: right;
`

export const SkillsList = styled.div`
    margin-top: ${spacing.small}rem;
    
    ul {
        display: flex;
        flex-direction: column;
        gap: ${spacing.small}rem;
        margin: 0;
        padding-left: ${spacing.xSmall}rem;
        font-size: ${fontSizes.small}rem;
        color: ${colors.lightGray};
    }

    li {
        list-style: none;
    }
`