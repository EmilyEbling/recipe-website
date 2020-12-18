import React from 'react'
import HomePage from './containers/HomePage/HomePage'
import AboutPage from './containers/AboutPage/AboutPage'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const routing = (
    <Router>
      <div className="container">
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} exact/>
      </div>
    </Router>
  )
  return (
    <>
    <div>
      {routing}
    </div>
    </>
  );
}
  
export default App;
  
