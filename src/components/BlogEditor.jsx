import React, { useState } from 'react';
import Section from './Section';

const BlogEditor = () => {
    const [sections, setSections] = useState([]);
    const [draggingIndex, setDraggingIndex] = useState(null);
    const [draggingOverIndex, setDraggingOverIndex] = useState(null);
    const blockList = ["Text Block", "Image", "Carousel", "Accordion"];

    const handleDragStart = (e, index) => {
        setDraggingIndex(index);
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const componentType = e.dataTransfer.getData("component");
        if (blockList.includes(componentType)) {
            setSections((prevSections) => [...prevSections, { type: componentType, content: '' }]);
        }
    };

    const allowDrop = (e) => {
        e.preventDefault();
    };

    const handleDragOver = (index) => {
        if (index !== draggingIndex) {
            setDraggingOverIndex(index);
        }
    };

    const handleDragEnd = () => {
        if (draggingIndex !== null && draggingOverIndex !== null && draggingIndex !== draggingOverIndex) {
            const draggedComponent = sections[draggingIndex];
            const newSections = [...sections];
            newSections.splice(draggingIndex, 1);
            newSections.splice(draggingOverIndex, 0, draggedComponent);
            setSections(newSections);
        }
        setDraggingIndex(null);
        setDraggingOverIndex(null);
    };

    const handleDelete = (index) => {
        setSections(sections.filter((_, i) => i !== index));
    };

    const handleContentChange = (index, newContent) => {
        const updatedSections = sections.map((section, i) => 
            i === index ? { ...section, content: newContent } : section
        );
        setSections(updatedSections);
    };

    const handleSave = () => {
        const savedSections = sections.map((section) => ({
            type: section.type,
            content: section.content,
        }));
        console.log(savedSections);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full bg-gray-800 text-white p-4 flex items-center justify-between">
                <div>
                    <button className="mr-4 bg-blue-600 px-4 py-2 rounded" onClick={handleSave}>Save</button>
                    <button className="mr-4 bg-blue-600 px-4 py-2 rounded">Preview</button>
                </div>
                <div className="flex">
                    <button className="mr-2 bg-gray-700 px-4 py-2 rounded">Desktop</button>
                    <button className="mr-2 bg-gray-700 px-4 py-2 rounded">Tablet</button>
                    <button className="bg-gray-700 px-4 py-2 rounded">Mobile</button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
                    <h3 className="font-bold mb-4">Components Library</h3>
                    {blockList.map((component) => (
                        <div
                            key={component}
                            draggable
                            onDragStart={(e) => {
                                e.dataTransfer.setData("component", component);
                                e.dataTransfer.effectAllowed = "move";
                            }}
                            className="p-4 mb-4 bg-white rounded shadow hover:bg-gray-50 cursor-pointer"
                        >
                            {component}
                        </div>
                    ))}
                </div>

                <div
                    className="flex-1 bg-gray-50 p-6 overflow-y-auto"
                    onDrop={handleDrop}
                    onDragOver={allowDrop}
                >
                    <h3 className="text-xl font-bold mb-4">Blog Post Sections</h3>
                    {sections.length === 0 && (
                        <p className="text-gray-400">Drag components here to start building your post...</p>
                    )}
                    <div className="space-y-4">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragEnd={handleDragEnd}
                                onDragOver={() => handleDragOver(index)}
                                onDragLeave={() => setDraggingOverIndex(null)}
                                className={draggingOverIndex === index ? "bg-gray-200" : ""}
                            >
                                <Section 
                                    sectionType={section.type} 
                                    content={section.content}
                                    onContentChange={(newContent) => handleContentChange(index, newContent)}
                                    onDelete={() => handleDelete(index)} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogEditor;