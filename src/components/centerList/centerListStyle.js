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
    font-weight: 700;

  }
  .city-name {
    padding-left: 40px;
    font-weight: 700;
  }
 
  
  .price-value, .hall-name,
  .building-name{
    padding: 0 0 20px 20px;
    font-weight: 700;
  }

`;

export default CenterListWrapper;
