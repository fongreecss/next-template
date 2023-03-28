import React from "react";

interface PlainCardProps {
    href?: string;
    title?: string;
    description?: string;
    class?: string;
}

const PlainCard:React.FC<PlainCardProps> = ({
        href = "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
        title = "Here is the title",
        description = "Here is the description",
        class: className = "outline-none focus:outline-none border border-gray-300 rounded-md p-4 hover:bg-gray-50",
}) => {
    return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`font-bold text-xl mb-2`}>
            {title} <span>-&gt;</span>
          </h2>
          <p>{description}</p>
        </a>
    );
};

export default PlainCard;