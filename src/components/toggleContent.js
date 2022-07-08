import React, {useRef} from 'react';

const ToggleContent = ({ children , showState}) => {
    const childRef = useRef();
    
    return (
        <div 
            className="content"
            ref={childRef}
            style={
                    showState ? {
                            height: childRef.current && childRef.current.scrollHeight + "px",
                            }
                        : {
                            height: "0px",
                            }
                }
        >
          {children}
        </div>
    );
};

export default ToggleContent;