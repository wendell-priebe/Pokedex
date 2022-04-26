import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Pokemon from '../Pokemon';
import Link from 'next/link';
import Image from 'next/image'
// import { Menu, Container } from './style';
import Logo from '../../public/logo-pokedex.png'

import  styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

 const Menu = styled.div`
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

 const Container = styled.div`
  display: flex;
`;


interface Pokemons {
  name: string
  id: number
  
  pokemons:{
    id: number;
    image: string;
    name: string;
  }
}

const Home: NextPage = (  ) => {
  // export default function Home(props){
    const [pokemons, setPokemons] = useState<Pokemons[]>([]);
    const [search, setSearch] = useState('');
    const [selecionado, setSelecionado] = useState('');

    useEffect(() =>{
      const queryPokemons = `query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          count
          next
          previous
          status
          message
          results {
            id
            url
            name
            image
            artwork
            dreamworld
          }
        }
      }`;
      const gqlVariables = {
        limit: 151,
        offset: 0,
      };
      fetch('https://graphql-pokeapi.graphcdn.app/', {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryPokemons,
          variables: gqlVariables,
        }),
        method: 'POST',
      })
        .then(res => res.json())
        .then(data => setPokemons(data.data.pokemons.results))

    }, [])

    function setarPokemon(nome : string){
      setSelecionado(nome)
    }

    function autoId(id : number){
      const str = "" + id;
      const pad = "000";
      const ans = pad.substring(0, pad.length - str.length) + str;
      return ans;
    }

    const s = search && search.toLowerCase();
    const filtered =
      !pokemons || !s
        ? pokemons
        : pokemons.filter(({ name }) =>
            name.toLowerCase().includes(s)
          );

    if (!pokemons) {
      return null;
    }

  return (
    <Container >
      <Menu>
        <Image 
          src={Logo} 
          alt="Logo"
        />
      
        <p>
          Everything you wanted to know about your favorite pocket monster!
        </p>

        <input
          type="search"
          value={search}
          placeholder="Search by name"
          onChange={(ev) => setSearch(ev.target.value)}
        />

        <hr />

        <ul>
          {filtered.map(({ id, name }) => (
            <li key={name}>
              <a onClick={()=>setarPokemon(name)}> 
              #
              {autoId(id)} 
              <span> - </span>
              {name}
              </a>
          </li>
          ))}
        </ul>
      </Menu>
      <Pokemon name={selecionado} />
    </Container> 
  )
}

export default Home;
