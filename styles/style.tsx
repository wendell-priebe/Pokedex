import  styled, {keyframes} from 'styled-components';

export const Container = styled.section`
  background-color:#00aeff;
  color: #fff;
  width: 80%;
  font-size: 16px;
`;

export const Title = styled.div`
  display:flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: 20px 20px 0 20px;
  padding: 0 50px;

  div{
    display: flex;
    align-content: center;
    align-items: center;
    img{
      width: 20%;
    }
  }
  h1{
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const ContainerCards = styled.div`
  height: 92%;
  display: grid;
  gap: 80px;
  grid-template-columns: 1fr 1fr;
  padding: 50px 75px;
`;

export const SobCard = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    flex-grow: 1;
    justify-content: center !important;
    align-items: center;
    padding: 10px;
  }
  div:first-child{
    margin-right: 20px;
  }
  div:last-child{
    display: flex;
    align-items: center !important;
  }
`;

export const Card = styled.div`
  background-color:#fff;
  color: #000;
  padding: 20px;
  border-radius: 5px;

  strong {
    display: inline;
  }
  div{
    padding: 0;
    float: left;
  }
  ul{
    display: flex;

    li{
      color: #fff;
      text-shadow: 1px 1px 1px black;
      list-style-type: none;
      text-transform: capitalize;
    }
  }
  ul li span{
    padding: 5px 20px;
    margin: 0 10px;
    border-radius: 10px;
  }
`;

export const Attributes = styled.span`
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 10px;
  text-align: center;

`;

export const CardAttributes = styled.span`
  background-color:#fff;
  color: #000;
  text-transform: capitalize;
  text-shadow: 1px 1px 1px black;
  font-size: 16px;
  border-radius: 5px;
  display: grid;
  gap: 10px 50px;
  grid-template-columns: 1fr 1fr 1fr;

  span:nth-child( 1 ){
    background-color: #cc4946;
  }
  span:nth-child( 2 ){
    background-color: #fd73cf;
  }
  span:nth-child( 3 ){
    background-color: orange;
  }
  span:nth-child( 4 ){
    background-color: #ffc400;
  }
  span:nth-child( 5 ){
    background-color: #4781ff;
  }
  span:nth-child( 6 ){
    background-color: #00ca00;
  }
`;

export const PartsA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:nth-child( 1 ){
    display: flex;
    justify-content: center;
    padding: 0;

    img{
      transform: scale(1.2);
      width: 60%;
    }
`;

export const PartsB = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:nth-child(1){
    text-align: center;
    flex-grow: 0;
    display: flex;
    padding: 5px 10px 0 0;
    text-transform: capitalize;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;

     strong{
      padding: 10px 10px;
     }
    div{
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      width:100% ;

      p{
        width: 50%;
        background-color: #fff;
      }
    }
    img{
      transform: scale(1.3);
      max-height: 100px ;
      max-width: 100px ;

    }
  }
  div:nth-child(2){
    flex-grow: 3;
    margin-top: 30px;
  }
`;
