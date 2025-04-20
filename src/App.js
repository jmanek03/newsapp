import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  // Use environment variable or direct API key
  const apiKey = process.env.REACT_APP_NEWS_API || "YOUR_NEWSDATA_IO_API_KEY_HERE";
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
          {/* Fixed typo: changed 'counry' to 'country' */}
          {/* Updated category values to match NewsData.io */}
          <Route exact path="/" element={<News setprogress={setProgress} apiKey={apiKey} key="top" pageSize={5} country="in" category="top" />}></Route>
          <Route exact path="/business" element={<News setprogress={setProgress} apiKey={apiKey} key="business" pageSize={5} country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setprogress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} country="in" category="entertainment" />}></Route>
          <Route exact path="/health" element={<News setprogress={setProgress} apiKey={apiKey} key="health" pageSize={5} country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News setprogress={setProgress} apiKey={apiKey} key="science" pageSize={5} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News setprogress={setProgress} apiKey={apiKey} key="sports" pageSize={5} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setprogress={setProgress} apiKey={apiKey} key="technology" pageSize={5} country="in" category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;