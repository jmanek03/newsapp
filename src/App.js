import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        />
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} counry="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={5} counry="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={5} counry="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={5} counry="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={5} counry="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={5} counry="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={5} counry="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

