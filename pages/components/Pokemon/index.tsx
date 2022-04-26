/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Title, SobCard, Card, Container, ContainerCards, Attributes, CardAttributes, PartsA, PartsB } from './style';

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

export default function Pokemon(  props : Props ){
  const [pokemon, setPokemon] = useState<Pokemon>();
  let name = props.name;
  if(props.name == ''){name = 'bulbasaur'};

  let peso = pokemon?.height;
  if(peso == undefined ){peso = 0};
  let altura = pokemon?.height;
  if(altura == undefined ){altura = 0};


  useEffect(() => {
    const queryPokemon = `query pokemon($name: String!) {
      pokemon(name: $name) {
      id
      name
      base_experience
      height
      weight
      stats {
        base_stat
        effort
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
      // .then(losg => setPokemon(  ) )
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
          <p>Butons</p>
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
                <Attributes>
                  {pokemon?.stats?.[0].base_stat} {/* {pokemon?.stats?.[0].stat?.name} */} HP
                </Attributes>
                <Attributes>
                  {/*{pokemon?.stats?.[5].base_stat} {/* {pokemon?.stats?.[5].stat?.name}  SPEED*/}
                </Attributes>
                <Attributes>
                  {/*{pokemon?.stats?.[1].base_stat} {/* {pokemon?.stats?.[1].stat?.name}  ATK*/}
                </Attributes>
                <Attributes>
                  {/*{pokemon?.stats?.[2].base_stat} {/* {pokemon?.stats?.[2].stat?.name}  DFF*/}
                </Attributes>
                <Attributes>
                  {/*{pokemon?.stats?.[3].base_stat} {/* {pokemon?.stats?.[3].stat?.name}  SP. ATK.*/}
                </Attributes>
                <Attributes>
                  {/*{pokemon?.stats?.[4].base_stat} {/* {pokemon?.stats?.[4].stat?.name}  SP. DEF.*/}
                </Attributes>
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
                When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                not only five centuries.
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