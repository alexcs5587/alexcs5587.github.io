import React from 'react';

function ContactItem({ icon, title, link, linkText }) {
    return (
        <div className="w-full text-center md:mb-0 md:w-1/3">
            <i className={`md:text-3xl bi ${icon}`}></i>
            <div className="w-8 h-px mx-auto my-4 border-0 rounded bg-rose-500"></div>
            <h2 className="mb-2 uppercase md:text-xl">
                {title}<span className="text-rose-500">.</span>
            </h2>
            <a
                href={link}
                className="text-base transition-colors duration-300 hover:text-rose-500"
            >
                {linkText}
            </a>
        </div>
    );
}

export default ContactItem;