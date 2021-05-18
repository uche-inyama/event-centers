/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import CentersPage from './containers/centerPage/centersPage';
import newCenterForm from './containers/newCenterForm/newCenterForm';
import { requestCenters } from './actions/actions';
import centerCard from './components/centerCard/centerCard';

const App = ({ loadCenters }) => {
  useEffect(() => {
    loadCenters();
    // eslint-disable-next-line
  }, []);

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
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
