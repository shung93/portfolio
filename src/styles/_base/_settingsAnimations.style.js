export const FadeIn = ({nm, name, duration}) => {

    return (
        `
            animation-name: ${nm};
            -webkit-animation-name: ${nm};
            -moz-animation-name: ${nm};
            -o-animation-name: ${nm};
            -ms-animation-name: ${nm};

            animation-duration: ${duration}s;
            -webkit-animation-duration: ${duration}s;
            -moz-animation-duration: ${duration}s;
            -o-animation-duration: ${duration}s;
            -ms-animation-duration: ${duration}s;

            @keyframes ${nm} {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            @-moz-keyframes ${nm} {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            @-webkit-keyframes ${nm} {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            @-o-keyframes ${nm} {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            @-ms-keyframes ${nm} {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
        `
    )
};


export const FadeInUp = ({nm, duration, distance}) => {

    return (
        `   
            opacity: 0;

            animation-name: ${nm};
            -webkit-animation-name: ${nm};
            -moz-animation-name: ${nm};
            -o-animation-name: ${nm};
            -ms-animation-name: ${nm};

            animation-duration: ${duration}s;
            -webkit-animation-duration: ${duration}s;
            -moz-animation-duration: ${duration}s;
            -o-animation-duration: ${duration}s;
            -ms-animation-duration: ${duration}s;

            animation-fill-mode: both;
            -webkit-animation-fill-mode: both;
            -moz-animation-fill-mode: both;
            -o-animation-fill-mode: both;
            -ms-animation-fill-mode: both;

            @keyframes ${nm} {
                from {
                    transform: translate3d(0,${distance}px,0)
                }
                to {
                    transform: translate3d(0,0,0);
                    opacity: 1
                }
            }
        
            
            @-moz-keyframes ${nm} {
                from {
                    transform: translate3d(0,${distance}px,0)
                }
                to {
                    transform: translate3d(0,0,0);
                    opacity: 1
                }
            }

            @-webkit-keyframes ${nm} {
                from {
                    transform: translate3d(0,${distance}px,0)
                }
                to {
                    transform: translate3d(0,0,0);
                    opacity: 1
                }
            }

            @-o-keyframes ${nm} {
                from {
                    transform: translate3d(0,${distance}px,0)
                }
                to {
                    transform: translate3d(0,0,0);
                    opacity: 1
                }
            }

            @-ms-keyframes ${nm} {
                from {
                    transform: translate3d(0,${distance}px,0)
                }
                to {
                    transform: translate3d(0,0,0);
                    opacity: 1
                }
            }
        `
    )
};