import React from 'react'
import Navbar from '../components/navbar'
import PokemonImage from "../assets/image 11sdf.png"
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
      <main className='flex flex-col-reverse md:flex-row flex-wrap w-[80%] m-auto items-center h-[100%]  justify-center md:justify-between  pt-24'>
        <div className='flex flex-col gap-3 w-[100%] md:w-[40%]'>
          <h2 className='text-4xl text-white'>Welcome To</h2>
          <h1 className='text-7xl text-white'>Pokemon Frontier</h1>
          <p className='text-md text-white'>Welcome to Pokemon Frontier, your ultimate destination for diverse and engaging Pokemon-themed games. Explore our dynamic Memory Card Game, classic Card Match Game, interactive Pokemon Guess Game, and visually rich Pokemon Trading Card Game Pokedex. Enhance your memory, test your knowledge, and appreciate the artistry of Pokemon TCG in one immersive platform. Join us on Pokemon Frontier and embark on a captivating journey through the world of Pokemon!</p>
          {/* <button className='w-28 border-2 rounded-3xl border-semiTransparentBlue text-semiTransparentBlue p-2' onClick={()=>navigate("/battle")}>Start Battle</button> */}
        </div>
        <img src={PokemonImage} className='w-96'></img>
      </main>
    </div>
  )
}

export default HomePage
