import React from 'react';
import TextEditor from './TextEditor';

const Section = ({ sectionType, content, onContentChange, onDelete }) => {
    const handleChange = (value) => {
        onContentChange(value); 
    };

    return (
        <div className="p-4 bg-white rounded shadow border">
            <h4 className="font-bold mb-2">{sectionType}</h4>
            {sectionType === 'Text Block' && (
              <>
               
                <TextEditor value={content} action={handleChange} />
              </>
            )}
            {sectionType === 'Image' && (
                <input
                    type="text"
                    value={content}
                    onChange={(e) => onContentChange(e.target.value)}
                    placeholder="Enter image URL..."
                    className="w-full p-2 border rounded"
                />
            )}
            {sectionType === 'Carousel' && (
                <input
                    type="text"
                    value={content}
                    onChange={(e) => onContentChange(e.target.value)}
                    placeholder="Enter image URLs (comma separated)..."
                    className="w-full p-2 border rounded"
                />
            )}
            {sectionType === 'Accordion' && (
                <input
                    type="text"
                    value={content}
                    onChange={(e) => onContentChange(e.target.value)}
                    placeholder="Enter accordion title..."
                    className="w-full p-2 border rounded"
                />
            )}
            <button onClick={onDelete} className="mt-2 text-red-500">Delete Section</button>
        </div>
    );
};

export default Section;
