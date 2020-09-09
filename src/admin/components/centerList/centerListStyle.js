import styled from 'styled-components';

const CenterListWrapper = styled.div`
  padding-left: 16px;
  margin-top: 10px;
  text-transform: capitalize;
  .headers{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 30px;
  }
  .price-value, .capacity-value{
    justify-self: center;
  }
  .capacity-value{
    justify-self: center;
    padding-left: 50px;
  }
  .city-name {
    padding-left: 30px;
  }
  .city-name, .capacity-value,
  .price-value, .hall-name,
  .building-name{
    padding-bottom: 20px;
    font-weight: 700;
  }

`;

export default CenterListWrapper;
