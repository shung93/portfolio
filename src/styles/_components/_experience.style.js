import styled from "styled-components";
import { fontSizes, spacing, viewWidths } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

const containerWidth = `${viewWidths.forty}vw`;
const containerTopMargin = `${spacing.medium}rem`;
const sectionTopMargin = `${spacing.xSmall}rem`;
const sectionBottomMargin = `${spacing.xxSmall}rem`;
const thinBorder = `1px solid ${colors.lightBlack}`;
const thickBorder = `2px solid ${colors.lightBlack}`;

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

export const ExperienceStyle = styled.div`
    margin-top: ${containerTopMargin};

    h1 {
        margin: 0;
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
    margin-bottom: ${spacing.large}rem;
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
    
    .detail-description {
        margin-top: 0;
        font-size: ${fontSizes.xSmall}rem;
    }

    .detail-description.true {
        animation: fadeIn 0.5s;
    }

    .detail-description.false {
        animation: fadeOut 0.5s;
    }

    @keyframes fadeIn{
        0%    {opacity: 0;}
        100%  {opacity: 1;}
    }

    @keyframes fadeOut{
        0%    {opacity: 1;}
        100%  {opacity: 0;}
    }
`