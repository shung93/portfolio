import React, { useEffect, useState } from "react";
import DownIcon from '../images/icons/downicon.svg'
import { TransitionContainer, TransitionStyle } from "../styles/_components/_transition.style";
import { spacing } from "../styles/_base/_settings.style";
import { colors } from "../styles/_base/_settingColors.style";

const TransitionProgress = () => {
    const [progressStatus, setProgressStatus] = useState(0);
  
    const updateProgress = (e) => {
        const windowScroll = document.body.scrollTop;
        const height = document.body.scrollHeight - document.body.clientHeight;
        const scrolled = (windowScroll / height) * 100
        setProgressStatus(scrolled);
    };

    useEffect(() => {
        document.addEventListener("scroll", updateProgress, true);
    }, [ ]);

    const radius =  Math.floor(50 - (progressStatus ** 2.5))
    const containerHeight = spacing.xxLarge + ((spacing.xxLarge + progressStatus)/5)

    return (
        <TransitionContainer
            style={{
                height: `${containerHeight}rem`,
            }}
        >
            <TransitionStyle
                style={{
                    height: `calc(60vh + ${progressStatus * 2}vh)`,
                    width: `calc(60vw + ${progressStatus ** 4}vw)`,
                    borderRadius: `${50}% / ${radius < 0 ? 0 : radius}%`//`${radius < 0 ? 0 : radius}%`,
                }}
            >
                <DownIcon
                    stroke={colors.lightLavendar}
                    style={{
                        marginTop: `${spacing.medium}rem`,
                    }}
                />
            </TransitionStyle>
        </TransitionContainer>
    )
};

export default TransitionProgress;