import styled from "styled-components";
import { colors } from "../_base/_settingColors.style";
import { spacing } from "../_base/_settings.style";
import { FadeInUp } from "../_base/_settingsAnimations.style";

export const TransitionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${spacing.medium}rem;
    width: 150%;
    background: ${colors.lightLavendar};
    z-index: 0;
`

export const TransitionStyle = styled.div`
    display: flex;
    justify-content: center;
    background: ${colors.medBlack};
    ${FadeInUp({
            nm:'transition-fadeinup', 
            duration:0.5, 
            distance: 15,
        })};
    }
`