import React, { useState, useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from "../../utils/particlesConfig";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import useFullHeightSection from "../../hooks/useFullHeightSection";
import WordFlipper from "../../components/common/wordFlipper";

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
        console.log(container);
    };

    return (
        <>
            <section id="home" className="h-[100svh] relative overflow-hidden">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={particlesConfig}
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 flex items-center justify-center ">
                    <div className="px-4 text-center text-white">
                        <h2 className="mb-4 text-3xl font-bold md:text-6xl">
                            Hello,{' '}
                            <span className="whitespace-nowrap">
                                I'm{' '}
                                <span className="text-rose-500">Alex&nbsp;Chui</span>
                            </span>.
                        </h2>
                        <p className="text-lg md:text-xl">
                            I am an in-house developer with 3+ years of
                            experience in developing applications
                            <span className="whitespace-nowrap">
                                {' '}with{' '}
                                <WordFlipper
                                    words={["Python", "ReactJS", "NextJS", "OpenAI", "VBA"]}
                                    interval={3000}
                                    textColor="text-rose-500"
                                    fontSize="text-3xl"
                                    fontWeight="font-base"
                                />
                            </span>
                        </p>
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