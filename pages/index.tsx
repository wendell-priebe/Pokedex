import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, { useState } from 'react';
import {Login, Header} from '../styles/login';
import Pokebola from '../public/pokeball.svg'
import Logo from '../public/logo-pokedex.png'
import Settings from '../public/settings.svg'

interface Email {
  email: string ;
}

const Home: NextPage = (  ) => {
  const [email , setEmail] = useState<Email>( {email : ''} );
  let str = new String(email);
  const router = useRouter();
  let verifi = str.length < 10;
  
  return (
    <>
      <Header>
        <div>
          <Image 
            src={Logo} 
            alt="Logo"
          />
          <Image 
            src={Settings} 
            alt="Configurações"
            width={30}
            height={30}
          />
        </div>
      </Header>
      <Login>
        <form onSubmit={function(infosDoEvento){
          infosDoEvento.preventDefault();
          router.push(`/Home`);
        }}>
          <Image 
            src={Pokebola}
            alt="Pokebola" 
            priority
            width={120}
            height={120}
          />
          <input 
            // email="email"
            type="email"
            placeholder="Seu melhor email" 
            // onChange={(infosDoEvento)=>{setEmail(infosDoEvento.target.value)}}
            // value={email}
          />
          <button type="submit" disabled={verifi}>
            Acessar
            {/* Acessar com {email} */}
          </button>
        </form>
      </Login>
    </>

  )
}
export default Home