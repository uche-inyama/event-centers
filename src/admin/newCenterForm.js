import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveCenter, centerFetched, centerUpdate } from './actions';

class CreateCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      building: '',
      hall: '',
      city: '',
      state: '',
      price: '',
      capacity: '',
      image: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    const { params } = this.props.match
    if (!params.id) return;

    fetch(`http://localhost:3002/api/v1/centers/${params.id}`)
      .then(res => res.json())
      .then(json => {
        console.log('center to edit');
        console.log(json);
        this.setState({
          ...json,
        })
      });
  }

  handleChange(name, e) {
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.state
    if (id) {
      this.props.updateCenter(id, event.target);
    } else {
      this.props.formSubmit(event.target);
    }
    this.props.history.push('/');
  }

  onImageChange = event => {
    this.setState({ image: event.target.files[0] })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new Center</h2>
        <div className="field">
          <label htmlFor="title">Building Name</label>
          <input type="text"
            name="center[building]"
            onChange={(e) => { this.handleChange('building', e) }}
            value={this.state.building}
          />
        </div>

        <div className="field">
          <label htmlFor="title">Hall name</label>
          <input type="text"
            name="center[hall]"
            onChange={(e) => { this.handleChange('hall', e) }}
            value={this.state.hall}
          />
        </div>

        <div className="field">
          <label htmlFor="title">City</label>
          <input type="text"
            name="center[city]"
            onChange={(e) => { this.handleChange('city', e) }}
            value={this.state.city}
          />
        </div>

        <div className="field">
          <label htmlFor="title">State</label>
          <input type="text"
            name="center[state]"
            onChange={(e) => { this.handleChange('state', e) }}
            value={this.state.state}
          />
        </div>

        <div className="field">
          <label htmlFor="title">Price</label>
          <input
            type="number"
            name="center[price]"
            onChange={(e) => { this.handleChange('price', e) }}
            value={this.state.price}
          />
        </div>

        <div className="field">
          <label htmlFor="title">Capacity</label>
          <input
            type="number"
            name="center[capacity]"
            onChange={(e) => { this.handleChange('capacity', e) }}
            value={this.state.capacity}
          />
        </div>
        <div className="field">
          <label htmlFor="title">Image</label>
          <input type="file"
            accept="image/"
            multiple={false}
            name="center[image]"
            onChange={(e) => this.onImageChange(e)}
          />
        </div>

        <div className="field">
          <label htmlFor="submit">Submit</label>
          <Link to="/">Modus Create</Link>
          <input type="submit" />
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formSubmit: ((center) => {
      dispatch(saveCenter(center))
    }),
    fetchCenter: ((id) => {
      dispatch(centerFetched(id))
    }),
    updateCenter: ((id, center) => {
      dispatch(centerUpdate(id, center))
    })
  }
}

const mapStateToProps = (state, props) => {
  const { params: { id } } = props.match;
  return { id };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCenter);
