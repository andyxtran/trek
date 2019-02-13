import styled from 'styled-components';

export default styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(1,1,1,0.65);
  display: flex;
  align-items: center;
  justify-content: center;

  span.close_modal_btn {
    position: fixed;
    right: 2px;
    top: 0;
    font-size: 25px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
`;
