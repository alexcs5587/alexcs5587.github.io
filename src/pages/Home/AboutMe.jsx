import React from 'react';
import useFullHeightSection from '../../hooks/useFullHeightSection';

function AboutMe() {
    const sectionRef = useFullHeightSection();

    return (
        <section id="about-me" ref={sectionRef} className="relative w-full py-8 bg-white z-1 lg:py-0">
            <div className="flex flex-col items-center max-w-screen-xl mx-auto lg:flex-row lg:h-screen">
                <div className="w-full text-black lg:mt-0 lg:w-2/5">
                    <div className="text-center">
                        <i className="text-5xl lg:text-6xl bi bi-person"></i>
                        <h2 className="mb-4 text-4xl font-bold text-black md:text-6xl">
                            About Me<span className="text-rose-500">.</span>
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-rose-500 lg:mb-12"></div>
                        <div className="mt-5 mx-5 lg:text-[0.9rem] lg:text-base text-left text-gray-500">
                            <p className="">
                                As a results-driven Technical Lead and Assistant IT Manager with 6+ years of experience, I specialize in architecting modern enterprise platforms and AI-powered solutions that transform complex business operations. Throughout my career, I have designed and delivered over 15 business-critical applications—including leading the full-stack revamp of high-volume university admission ecosystems, intelligent document verification, and process automation systems that scale with growing demand and save organizations significant time and costs.
                            </p>
                            <p className="mt-8">
                                Experienced in end-to-end project and team management across the full SDLC, I work closely with stakeholders to gather requirements, define project roadmaps, break down complex features into actionable tasks for developers, and manage timelines through to on-schedule release. Combining strategic planning with hands-on execution in Java (Spring Boot / JBoss EAP), React/TypeScript, Python, and Oracle Database—alongside rigorous code reviews, mentoring, and reliable production support—I ensure multi-system initiatives are delivered and maintained with exceptional stability and speed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-8 max-h-[30svh] lg:mt-0 lg:w-3/5 lg:max-h-full lg:h-full">
                    <img
                        alt=""
                        src="/images/aboutme.png"
                        className="object-cover w-full h-full "
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;