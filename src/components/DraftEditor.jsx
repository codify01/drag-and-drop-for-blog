// import React, { useState } from 'react';
// import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
// import { marked } from 'marked';
// import 'draft-js/dist/Draft.css';

// const MyDraftEditor = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [markdownContent, setMarkdownContent] = useState('');

//   const handleEditorChange = (state) => {
//     setEditorState(state);
//     const contentState = state.getCurrentContent();
//     const rawContent = convertToRaw(contentState);
//     const htmlContent = marked(rawContent.blocks.map(block => block.text).join('\n')); // Convert to Markdown
//     setMarkdownContent(htmlContent);
//   };

//   const handleMarkdownChange = (event) => {
//     const value = event.target.value;
//     setMarkdownContent(value);
    
//     const blocks = value.split('\n').map((text) => ({
//       text,
//       type: 'unstyled'
//     }));
    
//     const contentState = convertFromRaw({
//       entityMap: {},
//       blocks: blocks.map(block => ({
//         text: block.text,
//         type: block.type,
//         depth: 0,
//         inlineStyleRanges: [],
//         entityRanges: [],
//         data: {}
//       }))
//     });
    
//     setEditorState(EditorState.createWithContent(contentState));
//   };

//   return (
//     <div>
//       <h2>Markdown Input:</h2>
//       <textarea
//         value={markdownContent}
//         onChange={handleMarkdownChange}
//         rows={5}
//         style={{ width: '100%', marginBottom: '20px' }}
//         placeholder="Type Markdown here..."
//       />

//       <h2>Draft.js Editor:</h2>
//       <Editor
//         editorState={editorState}
//         onEditorStateChange={handleEditorChange}
//       />

//       <div>
//         <h2>Content Output (Markdown):</h2>
//         <pre>{markdownContent}</pre>
//       </div>
      
//       <div>
//         <h2>Rendered Output:</h2>
//         <div dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
//       </div>
//     </div>
//   );
// };

// export default MyDraftEditor;
