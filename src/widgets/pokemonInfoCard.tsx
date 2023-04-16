import React from 'react'
import * as api from "../api/index"
import { useQuery } from 'react-query';
import { PokemonType } from '../interfaces/Pokemon'
interface Props{
    pokemon: {
        name: string
        url: string
        
    }
    onclick: (name: string, url: string) => void
}

const PokemonInfoCard: React.FC<Props>=({pokemon, onclick})=> {
    let getPokemons = async () => {
        let {data} = await api.getPokemonData(pokemon.url)
        return data
    }
    const {data, status} = useQuery(pokemon.name, getPokemons)
    if(status === "loading"){
        return <h1>Loading...</h1>
    }
    if(status ==="error"){
        return <h1>Error</h1>
    }
  return (
    <div className='bg-white h-[250px] w-[220px] rounded-2xl flex flex-col justify-center items-center' onClick={()=> onclick(pokemon.name, pokemon.url)}>
        <img src={data.sprites.front_shiny} className='w-[150px]'/>
        <h5 className='font-bold'>{data.name}</h5>
        <p>{data.abilities[0].ability.name}</p>
    </div>
  )
}

export default PokemonInfoCard