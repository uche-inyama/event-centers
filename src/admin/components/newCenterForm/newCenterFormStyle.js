import styled from 'styled-components';

const NewCenterForm = styled.div`
width: 576px;
margin: 0 auto;
font-family: 'Montserrat', sans-serif;
h2{
  padding-top: 20px;
  text-align: center;
}
.field{
  display: grid;
  grid-template-rows: 1fr;
  input{
    height: 35px;
  }
  label{
    padding-top: 20px;
  }
}
`;

export default NewCenterForm;
