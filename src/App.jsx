import { useState } from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header.jsx';
import Home from "./pages/Home"
import Type_Video from './components/Type_Video.jsx';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [ videos, setVideos ] = useState([{

  }])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
