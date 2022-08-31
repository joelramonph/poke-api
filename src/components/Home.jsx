import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'

const Home = () => {

 const dispach = useDispatch()

const navigate = useNavigate()

    const handleSubmit = e => {
       e.preventDefault()
      const inputValue = e.target.name.value.trim()
      
      if (inputValue.length !== 0) {
        
        dispach(setNameTrainer(inputValue))

        navigate('/pokedex')
      }
      e.target.name.value = ""
    }



  return (
    <div>
        <h1>Hello! Trainer</h1>
        <p>To start give me your name</p>
        <form onSubmit={handleSubmit}>
            <input id='name' type="text" />
            <button >Catch them all</button>
        </form>
    </div>
  )
}

export default Home