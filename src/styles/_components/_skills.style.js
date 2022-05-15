import styled from "styled-components";
import { colors, fontSizes, spacing } from "../_base/_settings.style";

export const SkillStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${spacing.large} ${spacing.medium} ${spacing.none} ${spacing.medium};

`;

// export const SkillTitleStyle = styled.h1`
//     font-size: ${fontSizes.xLarge};
//     text-indent: -0.5rem;
//     margin: 0;
//     color: ${colors.lightBlack};
//     opacity: .95;
// `;

// export const SkillListStyle = styled.ul`
//     display: flex;
//     gap: 20px;
//     // justify-content: space-between;
//     list-style-type: none;
//     padding: 0;
//     margin: 0;
//     font-size: ${fontSizes.small};
//     opacity: .9;
// `;

export const SkillStyleInner = styled.div`
    margin-top: ${spacing.small};

    h1 {
        font-size: ${fontSizes.xLarge};
        margin: 0;
        color: ${colors.lightBlack};
        text-align: right;
        font-weight: 300;
    }

    ul {
        display: flex;
        gap: 20px;
        // justify-content: space-between;
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: ${fontSizes.medium};
        float: right;
    }
`