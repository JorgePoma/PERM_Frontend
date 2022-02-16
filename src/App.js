import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home"
import Detail from "./components/Detail"
import UserProfile from './components/UserProfile';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/details">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:type" component={<Detail />} />
          <Route exact path="/details/:brand" component={<Detail />} />
          <Route exact path="/user/profile"><UserProfile /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
