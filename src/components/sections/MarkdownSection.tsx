import React from 'react';
import ReactMarkdown from 'react-markdown';

type MarkdownSectionProps = {
    content: string;
};

const MarkdownSection: React.FC<MarkdownSectionProps> = ({ content }) => {
    return (
        <div className="markdown-section">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownSection;
