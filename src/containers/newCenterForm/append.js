export const append = values => {
  const data = new FormData();
  data.append('building', values.building);
  data.append('hall', values.hall);
  data.append('address', values.address);
  data.append('city', values.city);
  data.append('state', values.state);
  data.append('capacity', values.capacity);
  data.append('price', values.price);
  data.append('image', values.image);
  return data;
};

export const appendCloudinary = values => {
  const data = new FormData();
  data.append('upload_preset', 'event_center');
  data.append('file', values.file);
  return data;
};
