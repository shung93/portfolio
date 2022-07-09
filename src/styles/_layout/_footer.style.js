import styled from "styled-components";
import { fontSizes, spacing } from "../_base/_settings.style";

export const FooterStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: ${spacing.xxLarge}rem ${spacing.medium}rem ${spacing.xxSmall}rem ${spacing.medium}rem;

    p {
        font-size: ${fontSizes.xxSmall}rem;
        margin: 0;
    }
`;