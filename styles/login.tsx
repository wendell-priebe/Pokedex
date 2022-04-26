import  styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Login = styled.div`

  form{
    display: flex;
    flex-direction: column;
    max-width: 30%;
    margin: 0 auto ;
  }
  img:hover {
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
  }
  input{
    margin-top: 30px;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #b6b6b6;
  }
  button{
    margin-top: 10px;
    padding: 8px;
    border-radius: 3px;
    cursor: pointer;
    background-color: #2F55CC;
    color: #fff;
  }
  button:disabled {
    background-color: #5e86ffac;
    cursor: not-allowed;
  }
`;

export const Header = styled.div`
  background-color:#cc4946;
  margin-bottom: 100px;
  padding: 10px;

  div{
    display: flex;
    justify-content: space-between;
  }
  div > :last-child{
    cursor: pointer;
  }
  div > :last-child:hover {
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
  }
`;
