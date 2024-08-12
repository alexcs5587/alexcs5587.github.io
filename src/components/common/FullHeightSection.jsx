// src/components/useFullHeightSection.jsx

import { useEffect, useRef } from 'react';

const useFullHeightSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const adjustHeight = () => {
            if (sectionRef.current) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const windowHeight = window.innerHeight;
                sectionRef.current.style.minHeight = `${windowHeight - headerHeight}px`;
            }
        };

        adjustHeight();
        window.addEventListener('resize', adjustHeight);

        return () => {
            window.removeEventListener('resize', adjustHeight);
        };
    }, []);

    return sectionRef;
};

export default useFullHeightSection;