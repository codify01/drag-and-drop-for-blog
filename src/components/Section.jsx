import React from 'react';

const Section = ({ sectionType, content, onContentChange, onDelete }) => {
    const handleChange = (e) => {
        onContentChange(e.target.value);
    };

    return (
        <div className="p-4 bg-white rounded shadow border">
            <h4 className="font-bold mb-2">{sectionType}</h4>
            {sectionType === 'Text Block' && (
                <textarea
                    value={content}
                    onChange={handleChange}
                    placeholder="Enter text here..."
                    className="w-full p-2 border rounded"
                />
            )}
            {sectionType === 'Image' && (
                <input
                    type="text"
                    value={content}
                    onChange={handleChange}
                    placeholder="Enter image URL..."
                    className="w-full p-2 border rounded"
                />
            )}
            {sectionType === 'Carousel' && (
                <input
                    type="text"
                    value={content}
                    onChange={handleChange}
                    placeholder="Enter image URLs (comma separated)..."
                    className="w-full p-2 border rounded"
                />
            )}
            {sectionType === 'Accordion' && (
                <input
                    type="text"
                    value={content}
                    onChange={handleChange}
                    placeholder="Enter accordion title..."
                    className="w-full p-2 border rounded"
                />
            )}
            <button onClick={onDelete} className="mt-2 text-red-500">Delete Section</button>
        </div>
    );
};

export default Section;
