import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import CentersPage from './centersPage';
import newCenterForm from './newCenterForm';
import { requestCenters } from './actions';
import { connect } from 'react-redux';

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
