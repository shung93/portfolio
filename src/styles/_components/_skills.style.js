import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

export const SkillStyleInner = styled.div`
    margin-top: ${spacing.small}rem;
    text-align: right;

    ul {
        display: flex;
        gap: 20px;
        list-style-type: none;
        padding: ${spacing.xSmall}rem ${spacing.xSmall}rem ${spacing.none}rem 5rem;
        margin: 0;
        font-size: ${fontSizes.base}rem;
        float: right;
        position: relative;
        bottom: ${spacing.medium}rem;
        right: ${spacing.xSmall}rem;
        background: ${colors.lightBlack};
        color: ${colors.notWhite};
    }

    li {
        z-index: 1;
    }
`