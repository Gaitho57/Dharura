import React from 'react'
import './index.css'
import Home from './routes/Home'
import About from './routes/About'
import Contacts from './routes/Contacts'
import Learn from './routes/Learn'
import Map from './routes/Map'
import Post from './routes/Post'
import { Route, Routes } from 'react-router-dom'
import GetStarted from './routes/GetStarted'

function App() {
   return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/Contacts' element={<Contacts />} />
    <Route path='/Learn' element={<Learn />} />
    <Route path='/map' element={<Map />} />
    <Route path='/post' element={<Post />} />
    <Route path='get-started' element={<GetStarted />} />
    </Routes>
    </>
  );
}

export default App;
