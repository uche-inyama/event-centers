/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, gql } from '@apollo/client';
import {
  ADD_CENTER, GET_CENTERS, UPDATE_CENTER,
} from '../../Queries';
import NewCenterForm from './newCenterFormStyle';

const GET_CENTER = gql`
query Center($id: ID!) {
  center(id: $id){
    id
    building
    hall
    city
    state 
    price
    capacity
  }
}
`;

const CreateCenter = ({ history }) => {
  const { id } = useParams();
  const [addCenter] = useMutation(ADD_CENTER);
  const [updateCenter] = useMutation(UPDATE_CENTER);

  const [center, setCenter] = useState({
    id,
    building: '',
    hall: '',
    city: '',
    state: '',
    price: '',
    capacity: '',
  });

  const { data } = useQuery(GET_CENTER, {
    variables: { id },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (data) {
      const { center } = data;
      setCenter({
        id: center.id,
        building: center.building,
        hall: center.hall,
        city: center.city,
        state: center.state,
        price: center.price,
        capacity: center.capacity,
      });
    }
  }, [data]);

  const handleChange = ({ target: { name, value } }) => {
    setCenter(prev => (
      {
        ...prev,
        [name]: value,
      }
    ));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      updateCenter({
        variables: {
          id: center.id,
          building: center.building,
          hall: center.hall,
          city: center.city,
          state: center.state,
          price: center.price,
          capacity: center.capacity,
        },
      });
    } else {
      addCenter({
        variables: {
          building: center.building,
          hall: center.hall,
          city: center.city,
          state: center.state,
          price: center.price,
          capacity: center.capacity,
        },
        refetchQueries: [{ query: GET_CENTERS }],
      });
    }
    setCenter({
      building: '',
      hall: '',
      city: '',
      state: '',
      price: '',
      capacity: '',
    });
    history.push('/');
  };

  return (
    <NewCenterForm>
      <form onSubmit={handleSubmit}>
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
            name="building"
            onChange={handleChange}
            value={center.building}
          />
        </div>
        <div className="field">
          <label htmlFor="title">Hall Name</label>
          <input
            type="text"
            name="hall"
            onChange={handleChange}
            value={center.hall}
          />
        </div>

        <div className="field">
          <label htmlFor="title">City</label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            value={center.city}
          />
        </div>
        <div className="field">
          <label htmlFor="title">State</label>
          <input
            type="text"
            name="state"
            onChange={handleChange}
            value={center.state}
          />
        </div>
        <div className="field">
          <label htmlFor="title">Price</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={center.price}
          />
        </div>
        <div className="field">
          <label htmlFor="title">Capacity</label>
          <input
            type="number"
            name="capacity"
            onChange={handleChange}
            value={center.capacity}
          />
        </div>
        {/* <div className="field">
          <label htmlFor="title" />
          <input
            name="image"
            type="file"
            accept="image/*"
            multiple={false}
          />
        </div> */}
        <div className="field">
          <input type="submit" />
        </div>
      </form>
    </NewCenterForm>
  );
};

export default CreateCenter;
