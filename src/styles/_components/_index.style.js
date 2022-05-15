import styled from "styled-components";
import { colors, fontSizes, spacing } from "../_base/_settings.style";

export const IntroStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${spacing.none} ${spacing.medium} ${spacing.none} ${spacing.medium};
`;

export const IntroTitleStyle = styled.p`
    margin: ${spacing.xxLarge} ${spacing.none} ${spacing.none} ${spacing.none};
    text-indent: -0.4rem;    
    font-size: ${fontSizes.xLarge};
    line-height: 90%;
`;

export const IntroSubStyle = styled.p`
    margin: ${spacing.none} ${spacing.none} ${spacing.none} ${spacing.none};
    font-size: ${fontSizes.xSmall};
    color: ${colors.darkLavendar}
`;

export const IntroBgText = styled.div`
    position: absolute;
    z-index: -1;
    top: 1rem;
    left: 0rem;
    width: 100%;
    font-size: 11.5rem; // adjust for larger screens (and smaller)
    line-height: 85%;
    color: ${colors.notWhite};
    opacity: 0.4;
    pointer-events: none;
    word-break: break-all;
    text-align: right;
    white-space: nowrap;
`