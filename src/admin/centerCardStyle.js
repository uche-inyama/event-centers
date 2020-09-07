import styled from 'styled-components';

const CenterCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    text-transform: capitalize;
    padding: 10px;
    .content{
      display: grid;
      grid-template-columns: repeat(5, 1fr)
    }
    .two.buttons{
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 3px;
      .basic.button.green{
        border: solid 0.5px green;
        color: black;
        padding: 2px;
        text-decoration: none;
      }
      .basic.button.red{
        border: solid 0.5px red;
        color: black;
        padding: 2px;
      }
    }
    .extra.content{
      display: grid;
      grid-template-columns: 1fr;
    }
`;

export default CenterCardWrapper;
