import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";

export const FooterStyle = styled.div`
    padding: ${spacing.none}rem ${spacing.medium}rem ${spacing.none}rem ${spacing.medium}rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    background: ${colors.medBlack};
    color: ${colors.medLavendar};
    font-size: ${fontSizes.xxSmall}rem;

    a {
        color: ${colors.medLavendar};
    }

    .links {
        display: flex;
        flex-direction: row;
        gap: ${spacing.medium}rem;
    }
`;