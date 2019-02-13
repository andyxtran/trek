import styled from 'styled-components';

export default styled.div`
  padding-top: 10%;
  background-color: white;
  margin: 0% 10%;
  display: grid;
  grid-gap: 5px 5px;
  grid-template-columns: 33% 33% 33%;

  h2 {
    text-align: center;
    justify-content: space-between;
    margin-top: 2px;
    width: 100%;
    border-bottom: 3px solid pink;
  }
  div {
    background-color: white;
    margin: 5px;
    border: 3px solid pink;
  }
`;