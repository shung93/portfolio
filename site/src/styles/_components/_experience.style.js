import styled from "styled-components";
import { FadeInUp } from "../_base/_settingsAnimations.style";
import { fontSizes, spacing, viewWidths } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";
import { mediaSizes } from "../_base/_settingsMedia.style";
import { grayBorders } from "../_base/_settings.style";

const containerWidth = `${viewWidths.forty * 1.25}`;
const containerTopMargin = `${spacing.medium}rem`;
const sectionTopMargin = `${spacing.xSmall}rem`;
const sectionBottomMargin = `${spacing.xxSmall}rem`;
const thinBorder = `${grayBorders.thin}`;
const thickBorder = `${grayBorders.thick}`;

export const ExperienceStyle = styled.div`
    margin-top: ${containerTopMargin};

    h1 {
        margin: 0;
    }
`

export const ExperienceContainer = styled.div`
    border-bottom: ${thinBorder};
    margin-top: ${containerTopMargin};
    width: ${containerWidth}vw;

    @media only screen and (max-width: ${mediaSizes.phone}) {
        width: ${containerWidth * 1.75}vw;
    }

    h1 {
        font-weight: 300;
        font-size: ${fontSizes.xLarge}rem;
        color: ${colors.gray};
    }
    
    h2 {
        font-weight: 300;
        font-size: ${fontSizes.xSmall}rem;
        color: ${colors.medGray};
    }

    h3 {
        font-size: ${fontSizes.medium}rem;
        color: ${colors.gray};
        font-weight: 300;
    }

    p {
        font-size: ${fontSizes.xxSmall}rem;
        color: ${colors.medGray};
    }

    ul {
        margin-top: ${sectionTopMargin};
        font-size: ${fontSizes.xxSmall}rem;
        padding-left: ${spacing.xSmall}rem;
        color: ${colors.lightGray};
    }

    li {
        list-style: none;
    }

    li:before {
        content: "· ";
        font-size: ${fontSizes.xSmall}rem;
        vertical-align: middle;
    }
`

export const ExperienceStyleHeader = styled.div`
    margin-bottom: ${spacing.xLarge}rem;
    display: flex;
    flex-direction: column;
    border-top: ${thickBorder};

    h1 {
        margin-top: ${sectionTopMargin};
    }
    
    h2 {
        margin: 0;
    }
`

export const ExperienceStyleDetails = styled.div`
    margin-top: 0;
    border-bottom: ${spacing.large}rem solid rgba(255,255,255,0);
    border-top: ${thinBorder};

    h3 {
        margin-top: ${sectionTopMargin};
        margin-bottom: ${sectionBottomMargin};
    }

    p {
        margin: 0;
        margin-bottom: ${sectionBottomMargin};
    }

    .detail-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .detail {
        overflow: hidden;
        transition: height ease 0.4s;
    }

    .detail-show {
        ${FadeInUp({
            nm:'detail-text-show', 
            duration:0.6, 
            distance:10,
        })};
    }

    .detail-noshow {
        ${FadeInUp({
            nm:'detail-text-no-show', 
            duration:0.6, 
            distance:0,
            fadeOut:1,
        })};
    }
`