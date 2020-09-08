/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CentersPage from '../centerPage/centersPage';
import newCenterForm from '../newCenterForm/newCenterForm';
import { requestCenters } from '../../actions';
import centerCard from '../centerCard/centerCard';

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
