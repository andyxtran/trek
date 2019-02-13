import styled from 'styled-components';

export default styled.div`
  h3 {
    margin: 0;
    padding: 18px 0;
    background-color: white;
    color: #ffb8cb;
    
  }

  form {
    display: grid;
    grid-template-columns: calc(50% - 15px) calc(50% - 15px);
    grid-gap: 0 30px;
    background-color: white;
    padding: 1.5em;
    color: #676767;

    > div {
      display: flex;
      flex-direction: column;

      label {
        align-self: flex-start;
        font-size: 12px;
      }
    }

    input {
      padding: 0.4em;
      padding-top: 3px;
      border: 0;
      border-bottom: 1px solid #d2d1d1;
      outline: 0;
      font-size: 16px;
      margin-bottom: 0.5em;
    }
  }

  button {
    cursor: pointer;
    background-color: #ffb8cb;
    border-radius: 2px;
    outline: 0;
    border: 0;
    padding: 0.8em;
    width: 150px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0px 1px 2px rgba(1,1,1,0.2);
    justify-self: end;
    grid-column: 2 / 2;
    
    :hover {
      font-size: 15px;
      transform: scale(1.02);
    }
  }
`;