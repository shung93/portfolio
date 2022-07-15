import { useState, useEffect } from 'react'

export const Visible = (element) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, {  }
        );
        element.current && observer.observe(element.current);
    }, [element]);

    return isVisible;
};