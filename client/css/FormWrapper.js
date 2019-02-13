import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  h1 {
    background-color: #fefefe;
    border-top: 4px solid;
    border-bottom: 4px solid;
    width: 400px;
    padding: 0.3em 0;
    color: #ffb8cb;
    margin: 1.5em 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 0;

    input[name="username"] {
      margin-bottom: 2em;
    }

    input[name="password"] {
      margin-bottom: 0.3em;
    }

    input {
      padding: 0.4em;
      border: 0;
      border-bottom: 1px solid #d2d1d1;
      outline: 0;
      font-size: 16px;

      ::placeholder {
        color: grey;
      }
    }

    label {
      margin-bottom: 0;
      font-size: 25px;
    }

    .btns_cont {
      display: flex;
      flex-direction: column;
      align-items: center;
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

      :hover {
        transform: scale(1.02);
      }
    } 

    a {
      font-size: 13px;
      align-self: flex-end;
      margin-bottom: 2em;
      font-style: italic;
      color: #404040;
    }
  } 
`;
