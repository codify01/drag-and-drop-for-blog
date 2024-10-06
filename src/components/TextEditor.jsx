import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';

const MyEditor = ({ children, action }) => {
  const [editorContent, setEditorContent] = useState(children || '');



  const handleChange = (value) => {
    setEditorContent(value);
    action(value)
  };

  const saveContent = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: editorContent }),
      });

      if (!response.ok) {
        throw new Error('Failed to save content.');
      }

      alert('Content saved successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        // modules={MyEditor.modules}
        // formats={MyEditor.formats}
        className=" rounded-md h-48 bg-gray-200"
      />

      {/* <button onClick={saveContent} style={{ marginTop: '20px' }}>
        Save Content
      </button> */}

      <div>
        <h2>Content Output:</h2>
        <div className="prose">
          {parse(editorContent)}
        </div>
      </div>
    </div>
  );
};

// MyEditor.modules = {
//   toolbar: [
//     [{ header: [1, 2, false] }],
//     ['bold', 'italic', 'underline', 'strike'],
//     ['link', 'image'],
//     [{ list: 'ordered' }, { list: 'bullet' }],
//     ['clean'],
//   ],
// };

// MyEditor.formats = [
//   'header',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'list',
//   'bullet',
//   'link',
//   'image',
// ];

export default MyEditor;
