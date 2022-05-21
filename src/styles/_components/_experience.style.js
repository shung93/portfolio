import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

export const ExperienceStyle = styled.div`

    h1 {
        margin: 0;
    }

    ul {
        // display: flex;
        // gap: 20px;
        // list-style-type: none;
        // padding: ${spacing.xSmall}rem ${spacing.xSmall}rem ${spacing.none}rem 5rem;
        // margin: 0;
        // font-size: ${fontSizes.base}rem;
        // float: right;
        // position: relative;
        // bottom: ${spacing.medium}rem;
        // right: ${spacing.xSmall}rem;
        // background: ${colors.lightBlack};
        // color: ${colors.notWhite};
    }

    li {
        // z-index: 1;
    }
`

export const ExperienceStyleHeader = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin: 0;
        font-weight: 300;
        font-size: ${fontSizes.xLarge}rem;
        color: ${colors.lightBlack};
    }
    
    h2 {
        margin: 0;
        font-weight: 300;
        font-size: ${fontSizes.xSmall}rem;
        color: ${colors.medLavendar};
    }
`

export const ExperienceStyleDetails = styled.div`
    width: 25vw;

    .detail-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        margin-top: ${spacing.small}rem;

        h3 {
            margin: 0;
            font-size: ${fontSizes.medium}rem;
            color: ${colors.lightBlack};
            font-weight: 300;
        }
        p {
            margin: 0;
            font-size: ${fontSizes.xSmall}rem;
            text-align: right;
        }
    }

    .location {
        margin: 0;
        font-size: ${fontSizes.xxSmall}rem;
        color: ${colors.darkLavendar}
    }
`