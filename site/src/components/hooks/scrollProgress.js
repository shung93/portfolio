import React, { useEffect, useState } from "react";
import { ProgressMain, ProgressWrapper } from "../../styles/_components/_scroll.style";
import { spacing } from "../../styles/_base/_settings.style";

const ScrollProgress = () => {
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

    return (
        <div>
            <ProgressWrapper
                className="progress-wrapper"
            >
                <ProgressMain
                    className="progress-main"
                    style={{
                        height: `${progressStatus}vh`, 
                        maxHeight: `calc(100vh - ${spacing.small}rem * 2)`,
                    }}
                />
            </ProgressWrapper>
        </div>
    )
};

export default ScrollProgress;