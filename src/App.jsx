
import './App.css'
import { useEffect, useState } from 'react'

function App() {


  const [count, setCount] = useState(1)
  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${count}`)
      .then(res => res.json())
      .then(data => {setCharacter(data)}) 
      .catch(error => console.log('error', error));
  }, [count])

  return (
    <>
      {/* HEADER */}
      <nav>
        <div className="card">
          <div className="imagem">
            <img 
              src={character.image} 
              alt={character.name} 
              className="img" 
            />
          </div>

          <div className="nome">
            <h3 className='h3'>Nome: {character.name}</h3>
            <h4 className='h4'>
              Status: {character.status} - Espécie: {character.species}
            </h4>
            <h4 className='h4'>Gênero: {character.gender}</h4>
            <h4 className='h4'>
              Última localização: {character.location?.name}
            </h4>
          </div>
        </div>
      </nav>
      
        {/* BOTÃO */}
        <nav>
        <div className="button-get">
          <button 
            className='button' 
            onClick={() => setCount(count >= 826 ? 1 : count + 1)} 
          >
            Gerar um novo personagem
          </button>
        </div>
      </nav>
    </>
  )
}

export default App
