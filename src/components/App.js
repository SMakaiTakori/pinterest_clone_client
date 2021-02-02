import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import DisplayFavorites from "./displayFavorites";
import AboutPage from "./aboutPage";
import Home from "./Home";
import NavBar from "./navBar";

import map from "../images/map.jpg";

const App = ({ favorites }) => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/pins"
          render={() => <DisplayFavorites favorites={favorites} />}
        />
        <Route exact path="/about-app" component={AboutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(App);
