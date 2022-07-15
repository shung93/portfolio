import styled from "styled-components";
import { fontSizes, spacing, viewWidths } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

const containerWidth = `${viewWidths.forty}vw`;
const containerTopMargin = `${spacing.medium}rem`;
const sectionTopMargin = `${spacing.xSmall}rem`;
const sectionBottomMargin = `${spacing.xxSmall}rem`;
const thinBorder = `0.5px solid ${colors.medGray}`;
const thickBorder = `2px solid ${colors.medGray}`;

export const ExperienceStyle = styled.div`
    margin-top: ${containerTopMargin};

    h1 {
        margin: 0;
    }
`

export const ExperienceContainer = styled.div`
    border-bottom: ${thinBorder};
    margin-top: ${containerTopMargin};
    width: ${containerWidth};
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
    width: ${containerWidth};
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
        animation: fadeIn 0.2s;
        -webkit-animation: fadeIn 0.2s;
        -moz-animation: fadeIn 0.2s;
        -o-animation: fadeIn 0.2s;
        -ms-animation: fadeIn 0.2s;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @-moz-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @-webkit-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @-o-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @-ms-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    .detail-noshow {
        animation: fadeOut 0.6s;
        -webkit-animation: fadeOut 0.6s;
        -moz-animation: fadeOut 0.6s;
        -o-animation: fadeOut 0.6s;
        -ms-animation: fadeOut 0.6s;
    }

    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    @-moz-keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    @-webkit-keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    @-o-keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    @-ms-keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
`