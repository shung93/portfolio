import styled from "styled-components";
import { fontSizes, headingFontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

export const SectionTitleStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    border-bottom: 3px solid ${colors.lightBlack};
    
    h1 {
        z-index: -1;
        margin: 0;
        font-size: ${headingFontSizes.large}rem;
        color: ${colors.lightBlack};
        font-weight: 300;
        line-height: 90%;
    }

    .underline {
        border-bottom: ${spacing.medium}rem solid ${colors.lightBlack};
        display:inline-block;
    }
`
export const SectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${spacing.xxLarge}rem ${spacing.medium}rem ${spacing.none}rem ${spacing.medium}rem;
        
    .detail-button {
        margin-top: ${spacing.xSmall}rem;
        padding: 0;
        background: transparent;
        border: 1px solid transparent;
        color: ${colors.lightBlack};
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