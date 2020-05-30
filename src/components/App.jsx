import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../assets/styles/App.css';
import Navbar from './organisms/Navbar';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="fondo pt-5">
        <Switch>
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
