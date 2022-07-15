import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";
import { colors } from "../_base/_settingColors.style";
import { FadeIn } from "../_base/_settingsAnimations.style";

export const FooterStyle = styled.div`
    padding: ${spacing.none}rem ${spacing.medium}rem ${spacing.none}rem ${spacing.medium}rem;
    display: flex;
    justify-content: flex-end;
    background: ${colors.medBlack};
    color: ${colors.gray};

    p {
        font-size: ${fontSizes.xxSmall}rem;
        line-height: 0;
    }
`;