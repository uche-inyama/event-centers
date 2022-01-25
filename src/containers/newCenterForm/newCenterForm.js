/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveCenter, centerFetched, centerUpdate } from '../../actions/actions';
import NewCenterForm from './newCenterFormStyle';
import { localHost } from '../../imageUrl';
import { initialValues } from './initialValues';
import validate from './validate';

const CreateCenter = props => {
  const { id } = props;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const [header, setHeader] = useState('Add new Center');
  // const [message, setMessage] = useState('Created');

  useEffect(() => {
    const { match: { params } } = props;
    const { id } = params;
    if (!id) return;
    setHeader('Update Center');
    fetch(`${localHost}/api/v1/centers/${id}`)
      .then(res => res.json())
      .then(json => {
        setFormValues({
          ...json,
        });
      });
  }, [id]);

  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFormErrors(validate(formValues));

    if (validateForm(validate(formValues))) {
      const formElement = event.target;
      const { id } = formValues;
      const data = new FormData(formElement);
      const ans = data.get('image');
      const imageData = new FormData();
      imageData.append('file', ans);
      imageData.append('upload_preset', 'event_center');

      fetch('https://api.cloudinary.com/v1_1/ddcakt97r/image/upload', {
        method: 'POST',
        body: imageData,
      }).then(response => response.json())
        .then(({ url }) => {
          data.set('image', url);
          const { updateCenter, formSubmit, history } = props;
          if (id) {
            updateCenter(id, formElement);
            history.push('/');
          } else {
            formSubmit(data);
            history.push('/');
          }
        });
    } else {
      console.log('invalid form');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const {
    building, hall, address, city, state, price, capacity,
  } = formValues;

  return (
    <NewCenterForm>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>{`${message} successfully`}</div>
      ) : (<div />)} */}
      <form onSubmit={handleSubmit}>
        <h2>{header}</h2>
        <div className="field">
          <label htmlFor="title">Building Name</label>
          <input type="text" name="building" onChange={handleChange} value={building} />
        </div>
        <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.building}</p>

        <div className="field">
          <label htmlFor="title">Hall Name</label>
          <input type="text" name="hall" onChange={handleChange} value={hall} />
        </div>
        <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.hall}</p>

        <div className="field">
          <label htmlFor="title">Address</label>
          <input type="text" name="address" onChange={handleChange} value={address} />
        </div>
        <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.address}</p>

        <div className="field">
          <label htmlFor="title">City</label>
          <input type="text" name="city" onChange={handleChange} value={city} />
        </div>
        <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.city}</p>

        <div className="field">
          <label htmlFor="title">State</label>
          <input type="text" name="state" onChange={handleChange} value={state} />
        </div>
        <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.state}</p>

        <div className="field">
          <label htmlFor="title">Price</label>
          <input type="number" name="price" onChange={handleChange} value={price} />
        </div>
        <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.price}</p>

        <div className="field">
          <label htmlFor="title">Capacity</label>
          <input type="number" name="capacity" onChange={handleChange} value={capacity} />
        </div>
        <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.capacity}</p>

        <div className="field">
          <label htmlFor="title" />
          <input name="image" type="file" />
        </div>

        <div className="field">
          <input type="submit" />
        </div>
      </form>
    </NewCenterForm>
  );
};

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
