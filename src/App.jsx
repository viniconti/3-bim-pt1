import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  useEffect (() => {
    fetch('https://rickandmortyapi.com/api/character/'+count,)
    .then(res => res.json()) 
    .then(data => console.log(data)) 
    .catch(error => console.log('error', error));
  }, [count]);

  
  return (
    <>
    {/* HEADER */}
      <nav>
    <div className="card">
      <div className="imagem">
        <img src="https://rickandmortyapi.com/api/character/avatar/731.jpeg" alt="" className="img" />
      </div>

      <div className="nome">
        <h3 className='h3'>Naruto Smith</h3>
        <h4 className='h4'>🟢Vivo - Humanoid</h4>
        <h4 className='h4'>Gênero: Homem</h4>
        <h4 className='h4'>Último ep visto: "Gotron Jerrysis Rickvangelion"</h4>
      </div>
    </div>

    {/* BOTÃO */}
    <div className="button-get">
        <button className='button' onClick={() => setCount(count + 1)}>gerar um novo personagem</button>
      </div>
  </nav>
    </>
  )
}

export default App
