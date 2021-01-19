import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './HeaderComponent';
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AboutComponent from './AboutComponent';
import HomeComponent from './HomeComponent';
import FooterComponent from './FooterComponent';

class MainComponent extends React.Component {
    render() {
      return (
        <>
        <HeaderComponent />
        <Router>
          <Switch>
            <Route exact path="/home" component={HomeComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
        <FooterComponent />

        </>
      )
    }
  }

export default MainComponent;