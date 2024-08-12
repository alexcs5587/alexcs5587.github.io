import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WordFlipper = ({
    words = ['amazing', 'fantastic', 'incredible'],
    interval = 2000,
    textColor = 'text-blue-600',
    fontSize = 'text-inherit',
    fontWeight = 'font-bold'
}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const measuringRef = useRef(null);

    const nextWord = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, [words.length]);

    useEffect(() => {
        const timer = setInterval(nextWord, interval);
        return () => clearInterval(timer);
    }, [interval, nextWord]);

    useEffect(() => {
        if (measuringRef.current) {
            const maxWidth = Math.max(...words.map(word => {
                measuringRef.current.textContent = word;
                return measuringRef.current.offsetWidth;
            }));
            setWidth(maxWidth);
        }
    }, [words]);

    return (
        <span className={`inline-flex items-center overflow-hidden ${fontSize} ${fontWeight}`} style={{ width, verticalAlign: 'baseline' }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`inline-block ${textColor}`}
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
            <span ref={measuringRef} className="absolute opacity-0 whitespace-nowrap" aria-hidden="true">
                {words[currentIndex]}
            </span>
        </span>
    );
};


export default WordFlipper;