const validate = values => {
  const errors = {};
  if (!values.building) {
    errors.building = 'Building is required!';
  }
  if (!values.hall) {
    errors.hall = 'Hall is required!';
  }
  if (!values.city) {
    errors.city = 'City is required!';
  }
  if (!values.address) {
    errors.address = 'Address is required!';
  }
  if (!values.state) {
    errors.state = 'State is required!';
  }
  if (!values.capacity) {
    errors.city = 'City is required!';
  }
  if (!values.price) {
    errors.price = 'Price is required!';
  }
  if (!values.capacity) {
    errors.capacity = 'Capacity is required!';
  }
  return errors;
};

export default validate;
