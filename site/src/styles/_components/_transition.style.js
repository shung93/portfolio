import styled from "styled-components";
import { colors } from "../_base/_settingColors.style";
import { spacing } from "../_base/_settings.style";
import { FadeIn } from "../_base/_settingsAnimations.style";

export const TransitionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${spacing.medium}rem;
    width: 100%;
    background: ${colors.lightLavendar};
    z-index: 0;
`

export const TransitionStyle = styled.div`
    display: flex;
    justify-content: center;
    background: ${colors.medBlack};
    ${FadeIn({
            nm:'svg-fadein', 
            duration:1, 
        })};
    }
`