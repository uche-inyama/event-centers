/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveCenter, centerFetched, centerUpdate } from '../../actions';
import NewCenterForm from './newCenterFormStyle';

export class CreateCenter extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      id,
      building: '',
      hall: '',
      city: '',
      state: '',
      price: '',
      capacity: '',
      image: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    if (!match.params.id) return;

    fetch(`http://localhost:3002/api/v1/centers/${match.params.id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...json,
        });
      });
  }

  onImageChange = event => {
    this.setState({ image: event.target.files[0] });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { id } = this.state;
    const { updateCenter, formSubmit, history } = this.props;
    if (id) {
      updateCenter(id, event.target);
    } else {
      formSubmit(event.target);
    }
    history.push('/');
  }

  handleChange(name, e) {
    this.setState({ [name]: e.target.value });
  }

  render() {
    const {
      building, hall,
      city,
      state,
      price,
      capacity,
    } = this.state;
    return (
      <NewCenterForm>
        <form onSubmit={this.handleSubmit}>
          <h2>Add new Center</h2>
          <div className="field">
            <label
              htmlFor="title"
            >
              Building Name
            </label>
            <input
              type="text"
              aria-label="building"
              name="center[building]"
              onChange={e => { this.handleChange('building', e); }}
              value={building}
            />
          </div>
          <div className="field">
            <label htmlFor="title">Hall Name</label>
            <input
              type="text"
              name="center[hall]"
              onChange={e => { this.handleChange('hall', e) }}
              value={hall}
            />
          </div>

          <div className="field">
            <label htmlFor="title">City</label>
            <input
              type="text"
              name="center[city]"
              onChange={e => { this.handleChange('city', e); }}
              value={city}
            />
          </div>
          <div className="field">
            <label htmlFor="title">State</label>
            <input
              type="text"
              name="center[state]"
              onChange={e => { this.handleChange('state', e); }}
              value={state}
            />
          </div>
          <div className="field">
            <label htmlFor="title">Price</label>
            <input
              type="text"
              name="center[price]"
              onChange={e => { this.handleChange('price', e); }}
              value={price}
            />
          </div>
          <div className="field">
            <label htmlFor="title">Capacity</label>
            <input
              type="text"
              name="center[capacity]"
              onChange={e => { this.handleChange('capacity', e); }}
              value={capacity}
            />
          </div>
          <div className="field">
            <label htmlFor="title" />
            <input
              name="center[image]"
              type="file"
              accept="image/*"
              multiple={false}
              onChange={this.onImageChange}
            />
          </div>
          <div className="field">
            <input type="submit" />
          </div>
        </form>
      </NewCenterForm>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formSubmit: (center => {
      dispatch(saveCenter(center));
    }),
    fetchCenter: (id => {
      dispatch(centerFetched(id));
    }),
    updateCenter: (id, center) => {
      dispatch(centerUpdate(id, center));
    },
  };
};

const mapStateToProps = (state, props) => {
  const { params: { id } } = props.match;
  return { id };
};

CreateCenter.propTypes = {
  id: PropTypes.number.isRequired,
  updateCenter: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired,
  history: PropTypes.objectOf(
    PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  ).isRequired,
  match: PropTypes.objectOf(
    PropTypes.shape({
      params: PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      ),
    }),
  ).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateCenter);
