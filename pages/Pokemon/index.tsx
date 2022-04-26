/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// import { Title, SobCard, Card, Container, ContainerCards, Attributes, CardAttributes, PartsA, PartsB } from './style';
import  styled from 'styled-components';

 const Container = styled.section`
  background-color:#00aeff;
  color: #fff;
  width: 80%;
  font-size: 16px;
`;

 const Title = styled.div`
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
  div:last-child{
    div{
      background-color: #fff;
      width: 40px;
      height: 20px;
      border-radius: 10px;

      div{
        width: 15px;
        height: 15px;
        margin: auto 3px;
        background-color: #000;
        cursor:pointer;
      }
    }
  }
`;

 const ContainerCards = styled.div`
  height: 92%;
  display: grid;
  gap: 80px;
  grid-template-columns: 1fr 1fr;
  padding: 50px 75px;
`;

 const SobCard = styled.div`
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

 const Card = styled.div`
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

 const Attributes = styled.span`
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 10px;
  text-align: center;

`;

 const CardAttributes = styled.span`
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

 const PartsA = styled.div`
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

 const PartsB = styled.div`
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


interface Pokemon {
  base_experience: number;
  id: number;
  image: string;
  name: string;
  height: number;
  weight: number;
  stats:[{
    base_stat: number;
    stat: {
      name: string;
    }
  }]
  sprites:{
    front_default:string;
  }
  types:[{
    type:{
      name:string;
    }
  }]
}

interface Props { 
  name: string;
}

interface Tipo{
  type:{
    name: string;
  }
}

interface Status{
    base_stat:number;
    stat:{
      name: string;
    }
}

export default function Pokemon(  props : Props ){
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [status, setStatus] = useState<Status[]>();
  let name = props.name;
  if(props.name == ''){name = 'bulbasaur'};

  let peso = pokemon?.weight;
  if(peso == undefined ){peso = 0};
  let altura = pokemon?.height;
  if(altura == undefined ){altura = 0};

  /* useEffect(()=>{
    let estatus = [...pokemon?.stats];
    setStatus([pokemon?.stats[0]])
    console.log('estatus:', estatus)
  },[pokemon]) */

  useEffect(() => {
    setPokemon( undefined )
    const queryPokemon = `query pokemon($name: String!) {
      pokemon(name: $name) {
      id
      name
      base_experience
      height
      weight
      stats {
        base_stat
        stat {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }`;
    const gqlVariables = {
      name: name
    };
    const res = fetch('https://graphql-pokeapi.graphcdn.app/', {
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: queryPokemon,
        variables: gqlVariables,
      }),
      method: 'POST',
    })
      /* .then( losg => setPokemon( undefined ) ) */
      .then(res => res.json())
      .then(data => setPokemon(data.data.pokemon))
  },[name])

  function autoId(id : number | undefined){
    const str = "" + id;
    const pad = "000";
    const ans = pad.substring(0, pad.length - str.length) + str;
    return ans;
  }

  return (
    <Container>
      <>
        {console.log('AQ:', pokemon)} 
        <Title>
          <div>
          <h1>#{autoId(pokemon?.id)} - {pokemon?.name}</h1> 
          <img 
            src={pokemon?.sprites?.front_default} 
            alt={`IMG ${pokemon?.name}`} 
          />
          </div>
          <div>
            <Image src='/sol.png' width={20} height={20} />
            <div>
              <div></div>
            </div>
            <Image src='/lua.png' width={20} height={20} />
          </div>
        </Title>

        <ContainerCards>
          <PartsA>
            <Card>
              <img 
                src={pokemon?.sprites?.front_default} 
                alt={`IMG ${pokemon?.name}`} 
              />
            </Card>

            <Card>
              <div>
                <strong>Type</strong>
                <ul>
                    {pokemon?.types?.map((type: Tipo) =>{
                      function color(cor: string) {
                        switch(cor){
                          case 'poison':
                            return '#8000bb'
                          case 'fire':
                            return '#FA6600';
                          case 'water':
                            return '#00A4FA';
                          case 'normal':
                            return '#FADEBD';
                          case 'fighting':
                            return '#FA0101';
                          case 'flying':
                            return '#96DFFA';
                          case 'ground':
                            return '#3D0600';
                          case 'rock':
                            return '#C24D01';
                          case 'bug':
                            return '#BD6736';
                          case 'ghost':
                            return '#3D0039';
                          case 'steel':
                            return '#5b6065';
                          case 'grass':
                            return '#3E8500';
                          case 'electric':
                            return '#E0B112';
                          case 'psychic':
                            return '#E0D300';
                          case 'ice':
                            return '#AEEDFA';
                          case 'dragon':
                            return '#C70801';
                          case 'dark':
                            return '#420400';
                          case 'fairy':
                            return '#D2A1DB';
                          case 'unknown':
                            return '#CABE9C';
                          case 'shadow':
                            return '#001142';
                          default:
                            return 'red';
                        }
                      }
                      return (
                        <li key={pokemon?.id}>
                            <span style={{background: color(type?.type?.name)}}>
                              {type?.type?.name}
                            </span>
                        </li>
                      )
                    })}
                  
                </ul>
              </div>
            </Card>
            
            <SobCard>
              <Card >
                <p><strong>Height: </strong>{((altura / 10) * 3.27).toFixed(2).replace('.', "'")}`` / {altura / 10} m</p>
              </Card>
              <Card>
                <p><strong>Weight: </strong>{((peso / 10) * 2.205).toFixed(1)}lbs. / {peso / 10} Kg</p>
              </Card>
            </SobCard>

            <Card>
              <p>
                <strong>Attributes</strong>
              </p>
              <CardAttributes>
                {
                  pokemon?.stats?.map((states: Status) =>{
                      function color(cor: string) {
                        switch(cor){
                          case 'hp':
                            return '#cc4946'
                          case 'speed':
                            return '#fd73cf'
                          case 'attack':
                            return 'orange'
                          case 'defense':
                            return '#ffc400'
                          case 'special-attack':
                            return '#4781ff'
                          case 'special-defense': 
                            return '#00ca00'
                          default:
                            return 'red';
                        }
                      }
                      function name(name: string){
                        switch(name){
                          case 'hp':
                            return 'HP'
                          case 'speed':
                            return 'SPEED'
                          case 'attack':
                            return 'ATK'
                          case 'defense':
                            return 'DEF'
                          case 'special-attack':
                            return 'SP. ATK.'
                          case 'special-defense': 
                            return 'SP. DEF.'
                          default:
                            return 'ERROR';
                        }
                      }
                      return (
                        <Attributes key={pokemon?.id} style={{background: color(states?.stat?.name)}}>
                            {states?.base_stat} {name(states?.stat?.name)}
                        </Attributes>
                      )
                    })
                }

              </CardAttributes>
            </Card>

          </PartsA>

          <PartsB>
            <Card>
              <strong>Evolution</strong>
              <div>
                <img 
                  src={pokemon?.sprites?.front_default} 
                  alt={`IMG ${pokemon?.name}`} 
                />
                <p>
                  {pokemon?.name}
                </p>
              </div>
              <div>
                <img 
                  src={pokemon?.sprites?.front_default} 
                  alt={`IMG ${pokemon?.name}`} 
                />
                <p>
                  {pokemon?.name}
                </p>
              </div>
            </Card>

            <Card>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.  
              </p>
              <br />
              <p>
                But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <br />
              <p>
                But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              
            </Card>
          </PartsB>

        </ContainerCards>
      </>
    </Container>
  )
}

