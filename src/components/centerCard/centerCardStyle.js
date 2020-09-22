import styled from 'styled-components';

const CenterCardWrapper = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-columns: 4fr 1fr;
    text-transform: capitalize;
    height: 50px;
    padding: 10px;
    margin: 10px 10px 0 0;
    border-radius: 5px;
    .content{
      display: grid;
      grid-template-columns: repeat(5, 1fr)
    }
    .two.buttons{
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 3px;
      .basic.button.green, .basic.button.red{
        border: solid 0.5px green;
        border-radius: 2px;
        color: black;
        padding: 2px;
        text-decoration: none;
        height: 20px;
        text-align: center;
      }
      .basic.button.red{
        border: solid 0.5px red;
        width: 60%;
        cursor: pointer;
      }
    }
    .extra.content{
      display: grid;
      grid-template-columns: 1fr;
    }
`;

export default CenterCardWrapper;
