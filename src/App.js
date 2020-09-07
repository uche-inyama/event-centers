import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import CentersPage from './admin/centersPage';
import newCenterForm from './admin/newCenterForm';
import { requestCenters } from './admin/actions';
import centerCard from './admin/centerCard';

const App = ({ loadCenters }) => {
  useEffect(() => {
    loadCenters();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CentersPage} />
          <Route excat path="/center/new" component={newCenterForm} />
          <Route excat path="/center/:id" component={newCenterForm} />
          <Route path="/new" component={centerCard} />
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {
  loadCenters: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadCenters: () => {
    dispatch(requestCenters());
  },
});

export default connect(null, mapDispatchToProps)(App);
