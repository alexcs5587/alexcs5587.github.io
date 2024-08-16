// src/components/common/PortfolioCard.js
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function PortfolioCard({ portfolioCardData }) {
    const ProjectLanguage = portfolioCardData.language.map((language) => (
        <span
            key={language}
            className="inline-block px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
        >
            {language}
        </span>
    ));

    return (
        <div className="flex flex-col h-full pb-2 overflow-hidden rounded shadow-lg">
            <div className="h-40 overflow-hidden sm:h-44">
                <Zoom>
                    <img
                        src={`/images/${portfolioCardData.image}`}
                        className="object-cover w-full h-full"
                        alt={portfolioCardData.title}
                    />
                </Zoom>
            </div>
            <div className="flex-grow px-4 mb-2">
                <h5 className="my-2 text-lg font-bold">{portfolioCardData.title}</h5>
                <div className="flex flex-wrap">{ProjectLanguage}</div>
                <p className="text-sm text-gray-700">{portfolioCardData.text}</p>
            </div>
            <div className="px-4 mt-auto">
                {portfolioCardData.webLink && (
                    <a
                        href={`https://${portfolioCardData.webLink}`}
                        className="inline-block px-3 py-1 mb-2 mr-2 text-sm text-white bg-gray-800 rounded opacity-90 hvr-pulse"
                    >
                        Website
                    </a>
                )}
                {portfolioCardData.codeLink && (
                    <a
                        href={`https://${portfolioCardData.codeLink}`}
                        className="inline-block px-3 py-1 mb-2 mr-2 text-sm text-white bg-gray-800 rounded opacity-70 hvr-pulse"
                    >
                        Code
                    </a>
                )}
            </div>
        </div>
    );
}

export default PortfolioCard;