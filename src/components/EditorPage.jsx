// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import axios from 'axios';

// // Initial items for the drag and drop editor
// const initialItems = [
//   { id: '1', type: 'text', content: 'Text Block 1' },
//   { id: '2', type: 'image', content: 'https://via.placeholder.com/150' },
//   { id: '3', type: 'accordion', content: 'Accordion Block 1' }
// ];

// const EditorPage = () => {
//   const [items, setItems] = useState(initialItems);

//   // Function to handle the drag end event
//   const onDragEnd = (result) => {
//     if (!result.destination) return; // Prevents updating state if item is dropped outside the list

//     const reorderedItems = Array.from(items);
//     const [movedItem] = reorderedItems.splice(result.source.index, 1);
//     reorderedItems.splice(result.destination.index, 0, movedItem);

//     setItems(reorderedItems); // Update state with new item order
//   };

//   const handleSave = async () => {
//     console.log({ items }); // Logging the current state of items to the console
//     // Example POST request (commented out)
//     // try {
//     //   const response = await axios.post('http://localhost:3000/save-post', { items });
//     //   console.log('Post saved successfully:', response.data);
//     // } catch (error) {
//     //   console.error('Failed to save the post', error);
//     // }
//   };

//   return (
//     <div>
//       <h2>Blog Editor</h2>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="contentArea">
//           {(provided) => (
//             <div {...provided.droppableProps} ref={provided.innerRef}>
//               {items.map((item, index) => (
//                 <Draggable key={item.id} draggableId={item.id} index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={{ margin: '8px', padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
//                     >
//                       {renderContentBlock(item)}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//       <button onClick={handleSave} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
//         Save Post
//       </button>
//     </div>
//   );
// };

// // Helper function to render different types of content blocks
// const renderContentBlock = (item) => {
//   switch (item.type) {
//     case 'text':
//       return <p>{item.content}</p>;
//     case 'image':
//       return <img src={item.content} alt="content block" width="100%" />;
//     case 'accordion':
//       return <details><summary>Accordion</summary><p>{item.content}</p></details>;
//     default:
//       return <div>Unknown block</div>;
//   }
// };

// export default EditorPage;