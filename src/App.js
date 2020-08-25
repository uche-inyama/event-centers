import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import CentersPage from './admin/centersPage';
import newCenterForm from './admin/newCenterForm';
import { requestCenters } from './admin/actions';
import homePage from './users/homePage'

const App = ({ loadCenters }) => {
  useEffect(() => {
    console.log('load all centers here - app component');
    loadCenters();
  }, []);

  return (<div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={CentersPage} />
        <Route path="/center/new" component={newCenterForm} />
        <Route path="/center/:id" component={newCenterForm} />
        <Route path="/eventCenters" component={homePage} />
      </Switch>
    </Router>
  </div>);
}

const mapDispatchToProps = dispatch => {
  return {
    loadCenters: () => {
      dispatch(requestCenters());
    }
  }
};

export default connect(null, mapDispatchToProps)(App);
