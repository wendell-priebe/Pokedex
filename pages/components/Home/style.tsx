import  styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Menu = styled.div`
  background-color:#cc4946;
  width: 20%;
  height: 100%;
  min-height: 100vh;
  color: #FFF;
  padding: 35px;

  p{
    font-size: 12px;
    text-align: center;
    margin: 10px 0;
  }
  input{
    border: 1px solid #b6b6b6;
    border-radius: 20px;
    padding: 5px 10px;
    width: 100%;
  }
  hr{
    border: 1px solid #fff;
    margin: 10px 0;
  }
  ul{
    height: 70vh;
    overflow: hidden;
    overflow-y: scroll;

  }
  ul::-webkit-scrollbar {
    width: 7px;

  }
  ul::-webkit-scrollbar-track {
    background-color: #f8f8f8; 
    border-radius: 10px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: #000; 
    border-radius: 10px;

  }
  li{
    line-height: 200%;
    font-size: 16px;
    text-transform: capitalize;
    list-style-type: none;
  }
  a{
    color: #FFF;
    cursor: pointer;
  }
  a:hover{
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
`;
