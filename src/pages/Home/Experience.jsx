// src/pages/Home/Experience.js
import React from "react";
import useFullHeightSection from '../../hooks/useFullHeightSection';
import experienceData from '../../data/experienceData';

function Experience() {
    const sectionRef = useFullHeightSection();

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative flex flex-col justify-center w-full py-8 text-white bg-custom-radial md:py-0 "
        >
            <div className="max-w-6xl px-4 mx-auto">
                <div className="mb-8 text-center md:mb-12">
                    <i className="mb-4 text-4xl bi bi-briefcase md:text-5xl"></i>
                    <h2 className="text-4xl font-bold md:text-5xl">
                        Experience<span className="text-rose-500">.</span>
                    </h2>
                    <div className="w-24 h-1 mx-auto mt-4 bg-rose-500 rounded-xl"></div>
                </div>
                <div className="relative mx-2 md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-[40%] md:before:w-0.5 md:before:bg-gray-700">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="mb-6 group last:mb-0 md:mb-16">
                            <div className="md:flex md:items-start">
                                <div className="mb-4 md:mb-0 md:w-[40%] md:pr-8 md:text-right">
                                    <h3 className="font-semibold tracking-wider uppercase text-rose-500">
                                        {exp.company}
                                    </h3>
                                    <span className="text-sm tracking-wider text-gray-400 uppercase">
                                        {exp.companyTranslation}
                                    </span>
                                </div>
                                <div className="hidden md:block absolute left-[40.2%] -translate-x-1/2 mt-2 w-4 h-4 bg-gray-800 border-2 border-rose-500 rounded-full z-10 group-hover:bg-rose-500 transition-colors duration-300"></div>
                                <div className="md:w-[60%] md:pl-12">
                                    <h4 className="font-semibold tracking-wider uppercase">
                                        {exp.position}
                                    </h4>
                                    <time className="block mb-4 text-sm text-gray-400 uppercase">
                                        {exp.duration}
                                    </time>
                                    <ul className="pl-5 space-y-2 text-gray-300 list-disc list-outside">
                                        {exp.responsibilities.map((resp, respIndex) => (
                                            <li key={respIndex}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {index < experienceData.length - 1 && (
                                <div className="my-8 border-b border-gray-700 md:hidden"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;