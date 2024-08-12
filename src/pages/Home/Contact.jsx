import React from "react";
import ContactItem from "../../components/common/ContactItem";

function Contact() {
    return (
        <section
            id="contact"
            className="relative text-white bg-gray-800 md:py-12">
            <div className="flex flex-col items-center justify-center max-w-screen-xl gap-4 px-4 py-8 mx-auto md:gap-8 md:flex-row">
                <ContactItem
                    icon="bi-github"
                    title="Github"
                    link="https://github.com/alexcs5587/"
                    linkText="View Project"
                />
                <ContactItem
                    icon="bi-linkedin"
                    title="Linkedin"
                    link="https://www.linkedin.com/in/alexchui25/"
                    linkText="View Profile"
                />
                <ContactItem
                    icon="bi-envelope-open"
                    title="Email"
                    link="mailto:alexcs5587@gmail.com"
                    linkText="alexcs5587@gmail.com"
                />
            </div>
        </section>
    );
}

export default Contact;