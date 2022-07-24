import styled from "styled-components";
import { colors } from "../_base/_settingColors.style";
import { spacing } from "../_base/_settings.style";

export const ProgressWrapper = styled.div`
    margin: ${spacing.small}rem ${spacing.xSmall}rem ${spacing.small}rem ${spacing.xSmall}rem;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
`

export const ProgressMain = styled.div`
    background: ${colors.medGray};
    width: 1pt;
`