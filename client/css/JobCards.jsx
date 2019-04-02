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
    margin-top: 0px;
    width: 100%;
    background-color: pink;
    color: white
    border-bottom: 3px solid pink;
  }
  div {
    background-color: white;
    margin: 5px;
    border: 3px solid pink;
    border-radius: 0.5em;
  }

  li {
    text-decoration: none;
    list-style-type: circle; 
  }
 span {
   display: flex; 
   justify-content: center;
   align-items: center; 
   padding-bottom: 0.5em;

 }
`;
