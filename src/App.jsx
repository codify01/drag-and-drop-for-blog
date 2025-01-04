// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
// import EditorPage from './components/EditorPage';
import BlogEditor from './components/BlogEditor';
import PostPage from './components/PostPage';
import CategoryForm from './components/AddCat';
import SubcategoryForm from './components/AddSubcat';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/post" element={<PostPage/>} />
        <Route path='/' element={<BlogEditor/>}/>
        <Route path='/add-category' element={<CategoryForm/>}/>
        <Route path='/subcat' element={<SubcategoryForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
