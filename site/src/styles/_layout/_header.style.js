import styled from "styled-components";
import { colors } from "../_base/_settingColors.style";
import { fontSizes, spacing } from "../_base/_settings.style";
import { FadeInUp, FadeIn } from "../_base/_settingsAnimations.style";


export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${fontSizes.xSmall}rem;
    border-bottom: 1px solid ${colors.lightBlack};
    ${FadeIn({
        nm: 'nav-border-fadein',
        duration: 1, 
        distance: 10,
    })};

    p {
        margin-top: ${spacing.small}rem;
        margin-bottom: ${spacing.small}rem;
    }

    .content {
        ${FadeInUp({
            nm:'navbar-fadein', 
            duration:1, 
            distance:10,
        })};
    }
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;    
    list-style-type: none;
    margin-top: ${spacing.small}rem;
    margin-bottom: ${spacing.small}rem;

    a {
        textDecoration: 'none';
        color: ${colors.lightBlack};
    }
`;