import { gql } from '@apollo/client';

const GET_CENTERS = gql`
  {
    centers {
      id
      building
      hall
      city 
      price
      capacity
   }
  }
`;

const GET_CENTER = gql`
  query Center($id: ID!) {
    center(id: $id){
      building
      hall
      city
      price
      capacity
    }
  }
`;

const ADD_CENTER = gql`
  mutation AddCenter($building: String!, $hall: String!, $city: String!,
    $state: String!, $price: String!, $capacity: String!) {
      createCenter(input: { building: $building, hall: $hall, city: $city,
        state: $state, price: $price, capacity: $capacity }) {
          center {
            id
            building
          }
    }
  }
`;

const UPDATE_CENTER = gql`
  mutation updateCenter($id: ID!, $building: String!, $hall: String!, $city: String!,
    $state: String!, $price: String!, $capacity: String!) {
      updateCenter(input: {id: $id, building: $building, hall: $hall, city: $city,
        state: $state, price: $price, capacity: $capacity}){
          center {
            id
            building
            hall
            city
            state
            price
            capacity
          }
        }
    }
`;

const REMOVE_CENTER = gql`
    mutation destroyCenter($id: ID!){
      destroyCenter(input: { id: $id }) {
        id
      }
    }
`;

export {
  ADD_CENTER, GET_CENTERS, GET_CENTER, UPDATE_CENTER, REMOVE_CENTER,
};
