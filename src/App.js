import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

const App =()=>{
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<News setprogress={setProgress} apiKey={apiKey} key="general" pageSize={5} counry="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setprogress={setProgress} apiKey={apiKey} key="business" pageSize={5} counry="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setprogress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} counry="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setprogress={setProgress} apiKey={apiKey} key="health" pageSize={5} counry="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setprogress={setProgress} apiKey={apiKey} key="science" pageSize={5} counry="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setprogress={setProgress} apiKey={apiKey} key="sports" pageSize={5} counry="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setprogress={setProgress} apiKey={apiKey} key="technology" pageSize={5} counry="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
}

export default App;