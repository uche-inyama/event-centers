/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveCenter, centerFetched, centerUpdate } from '../../actions/actions';
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    if (!match.params.id) return;

    fetch('https://serene-eyrie-97376.herokuapp.com/api/v1/centers')
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...json,
        });
      });
  }

  // /${match.params.id}

  handleSubmit(event) {
    event.preventDefault();
    const formElement = event.target;
    const { id } = this.state;
    this.data = new FormData(event.target);
    const ans = this.data.get('center[image]');
    this.data2 = new FormData();
    this.data2.append('file', ans);
    this.data2.append('upload_preset', 'event_center');

    fetch('https://api.cloudinary.com/v1_1/ddcakt97r/image/upload', {
      method: 'POST',
      body: this.data2,
    }).then(response => response.json())
      // eslint-disable-next-line camelcase
      .then(({ url }) => {
        this.data.set('center[image]', url);
        const { updateCenter, formSubmit, history } = this.props;
        if (id) {
          updateCenter(id, formElement);
        } else {
          formSubmit(this.data);
        }
        history.push('/');
      });
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
              onChange={e => { this.handleChange('hall', e); }}
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

const mapDispatchToProps = dispatch => ({
  formSubmit: (center => {
    dispatch(saveCenter(center));
  }),
  fetchCenter: (id => {
    dispatch(centerFetched(id));
  }),
  updateCenter: (id, center) => {
    dispatch(centerUpdate(id, center));
  },
});

const mapStateToProps = (state, props) => {
  const { params: { id } } = props.match;
  return { id };
};

CreateCenter.defaultProps = {
  id: null,
};

CreateCenter.propTypes = {
  id: PropTypes.string,
  updateCenter: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired,
  history: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  match: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateCenter);
