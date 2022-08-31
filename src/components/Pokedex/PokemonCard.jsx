import axios from 'axios';
import React from 'react'
import {useEffect, useState } from 'react'
import StatPokemon from './StatPokemon';

const PokemonCard = ({url}) => {

const [pokemon, setPokemon] = useState()

useEffect(() => {
   
    axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
}, []);

console.log(pokemon)

  return (
    <article>
      <header>
        <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
      </header>
      <section className="body">
        <h3>{pokemon?.name}</h3>
        <ul>

        {
          pokemon?.types.map(slot => (
            <li key={slot.type.url}>{slot.type.name}</li>
          ))
        }

        </ul>
      </section>
      <footer>
        <ul>
          {
            pokemon?.stats.map(stat => (
             <StatPokemon 

              key={stat.stat.url}
              infoStat={stat}
               
             />
            ))
          }
        </ul>
      </footer>
    </article>
    

  )
}

export default PokemonCard