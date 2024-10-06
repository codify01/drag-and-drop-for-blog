// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
// import EditorPage from './components/EditorPage';
import BlogEditor from './components/BlogEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/editor" element={<EditorPage />} /> */}
        <Route path='/blog' element={<BlogEditor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
