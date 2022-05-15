import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";

const headerSpacing = `${spacing.medium} ${spacing.medium} ${spacing.none} ${spacing.medium}`;

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HeaderTitle = styled.p`
    margin: ${headerSpacing};
    font-size: ${fontSizes.xSmall}
`;

export const HeaderNav = styled.nav`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: ${headerSpacing};
    gap: ${spacing.xSmall};
    font-size: ${fontSizes.xxSmall}
`;