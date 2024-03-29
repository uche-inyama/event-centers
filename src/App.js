/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CentersPage from './containers/centerPage/centersPage';
import newCenterForm from './containers/newCenterForm/newCenterForm';
// import centerList from './components/centerList/centerList';
import CenterPage from './containers/newCenterForm/centerpage';
import { requestCenters } from './actions/actions';
import centerCard from './components/centerCard/centerCard';

const App = ({ loadCenters }) => {
  useEffect(() => {
    loadCenters();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" component={centerList} /> */}
          <Route exact path="/" component={CentersPage} />
          <Route excat path="/center/new" component={CenterPage} />
          <Route excat path="/center/:id" component={CenterPage} />
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
