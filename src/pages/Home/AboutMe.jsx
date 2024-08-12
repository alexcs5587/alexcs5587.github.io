import React from 'react';
import useFullHeightSection from '../../hooks/useFullHeightSection';

function AboutMe() {
    const sectionRef = useFullHeightSection();

    return (
        <section id="about-me" ref={sectionRef} className="relative w-full h-full bg-white z-1">
            <div className="flex flex-col items-center max-w-screen-xl mx-auto md:flex-row">
                <div className="w-full mt-8 text-black md:mt-0 md:w-2/5">
                    <div className="text-center">
                        <i className="text-5xl md:text-6xl bi bi-person"></i>
                        <h2 className="mb-4 text-4xl font-bold text-black md:text-6xl">
                            About Me<span className="text-rose-500">.</span>
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-rose-500 md:mb-12"></div>
                        <div className="mt-5 mx-5 md:text-[0.9rem] lg:text-base text-left text-gray-500">
                            <p className="">
                                As a results-driven Application Developer with 3+ years of experience, I specialize in utilizing the latest technologies to enhance business processes and drive efficiency. Throughout my career, I have designed and developed various AI-powered, data-driven applications that have optimized operations, improved decision making and saved organizations significant time and costs.
                            </p>
                            <p className="mt-8">
                                In my current role, I supervise a small team of developers and am responsible for the full development lifecycle. Through active engagement with stakeholders and mentoring junior developers, I ensure projects are on track and meet requirements. With over 3 years of hands-on experience leading the successful delivery of more than 10 business-critical applications, I have demonstrated an ability to strategically design and flawlessly execute projects that drive real value.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 md:h-screen md:w-3/5 h-[210px]">
                    <img
                        alt=""
                        src="/images/aboutme.png"
                        className="object-cover md:w-full md:h-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;