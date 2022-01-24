export const initialValues = ({
  building: '',
  hall: '',
  address: '',
  city: '',
  state: '',
  capacity: '',
  price: '',
  image: '',
});

export const formValues = formObject => ({
  id: formObject.id,
  building: formObject.building,
  hall: formObject.hall,
  address: formObject.address,
  city: formObject.city,
  state: formObject.state,
  capacity: formObject.capacity,
  price: formObject.price,
});
