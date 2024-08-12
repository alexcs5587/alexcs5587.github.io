// src/pages/Home/index.js
import React, { useState, useEffect } from 'react';
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from '../../utils/particlesConfig';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import useFullHeightSection from '../../hooks/useFullHeightSection';
import WordFlipper from '../../components/common/wordFlipper';


function Home() {
    const [init, setInit] = useState(false);
    const sectionRef = useFullHeightSection();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <>
            <section id="home" ref={sectionRef} className="">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    className="h-screen"
                    options={particlesConfig}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                    <div className="absolute px-4 text-white transform md:-translate-x-1/2 md:-translate-y-1/2 top-1/2 md:left-1/2">
                        <div className="text-center">
                            <h2 className="mb-4 text-4xl font-bold md:text-6xl">
                                Hello, I'm <span className="text-rose-500">Alex Chui</span>.
                            </h2>
                            <p className="text-lg md:text-xl">
                                I am an in-house developer with 3+ years of experience in developing applications with&nbsp;&nbsp;
                                <WordFlipper
                                    words={['VBA', 'ReactJS', 'Python', 'OpenAI']}
                                    interval={3000}
                                    textColor="text-rose-500"
                                    fontSize="text-3xl"
                                    fontWeight="font-base"
                                />

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <AboutMe />
            <Experience />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;