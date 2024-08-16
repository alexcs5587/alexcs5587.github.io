// src/pages/Home/Projects.js
import React from "react";
import PortfolioCard from "../../components/common/PortfolioCard";
import portfolioData from "../../data/portfolioData";
import useFullHeightSection from '../../hooks/useFullHeightSection';

function Projects() {
  const sectionRef = useFullHeightSection();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative flex flex-col justify-center w-full py-8 bg-white"
    >
      <div className="flex items-center h-full max-w-screen-xl px-4 mx-auto">
        <div className="w-full">
          <div className="mb-8 text-center md:mb-12">
            <i className="mb-4 text-4xl bi bi-folder md:text-5xl"></i>
            <h2 className="text-4xl font-bold md:text-5xl">
              Projects<span className="text-rose-500">.</span>
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-rose-500"></div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.map(cardData => <PortfolioCard key={cardData.title} portfolioCardData={cardData} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;