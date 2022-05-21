import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

// const headerSpacing = `${spacing.medium}rem ${spacing.none}rem ${spacing.xSmall}rem ${spacing.none}rem`;
export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: ${spacing.medium}rem;
    margin-right: ${spacing.medium}rem;
    font-size: ${fontSizes.xSmall}rem;
    border-bottom: 1px solid ${colors.lightBlack};
`;

export const HeaderTitle = styled.p`
    margin-top: ${spacing.medium}rem;
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;    
    list-style-type: none;
    margin-top: ${spacing.medium}rem;
    gap: ${spacing.xSmall}rem;
`;