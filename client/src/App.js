import React from 'react'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import Coffee from './components/Coffee/Coffee'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const routing = (
    <Router>
      <div className="container">
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} exact/>
        <Route path="/coffee" component={Coffee} exact/>
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
  
