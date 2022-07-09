import styled from "styled-components";
import { fontSizes, spacing, viewWidths } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

const containerWidth = `${viewWidths.forty}vw`;
const containerTopMargin = `${spacing.medium}rem`;
const sectionTopMargin = `${spacing.xSmall}rem`;
const sectionBottomMargin = `${spacing.xxSmall}rem`;
const thinBorder = `0.75px solid ${colors.lightBlack}`;
const thickBorder = `2px solid ${colors.lightBlack}`;

export const ExperienceStyle = styled.div`
    margin-top: ${containerTopMargin};

    h1 {
        margin: 0;
    }
`

export const ExperienceContainer = styled.div`
    border-bottom: 1px solid ${colors.lightBlack};
    margin-top: ${containerTopMargin};
    width: ${containerWidth};
    h1 {
        font-weight: 300;
        font-size: ${fontSizes.xLarge}rem;
        color: ${colors.lightBlack};
    }
    
    h2 {
        font-weight: 300;
        font-size: ${fontSizes.xSmall}rem;
        color: ${colors.medLavendar};
    }

    h3 {
        font-size: ${fontSizes.medium}rem;
        color: ${colors.black};
        font-weight: 300;
    }

    p {
        font-size: ${fontSizes.xxSmall}rem;
        color: ${colors.darkLavendar};
    }

    ul {
        margin-top: ${sectionTopMargin};
        font-size: ${fontSizes.xxSmall}rem;
        padding-left: ${spacing.xSmall}rem;
        color: ${colors.lightBlack};
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
        transition: height ease 0.2s;
    }

    .detail-show {
        animation: fadeIn 0.3s; 
        -webkit-animation: fadeIn 0.3s; 
        -moz-animation: fadeIn 0.3s; 
        -o-animation: fadeIn 0.3s; 
        -ms-animation: fadeIn 0.3s; 
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
`