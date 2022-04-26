import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Pokemon from '../Pokemon';
import Link from 'next/link';
import Image from 'next/image'
import { Menu, Container } from './style';
import Logo from '../../../public/logo-pokedex.png'

interface Pokemons {
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
        : pokemons.filter(({ id, name }) =>
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

export default Home
