import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState()

  useEffect (() => {
    fetch('https://rickandmortyapi.com/api/character/'+count)
    .then(res => console.log(res))
    .catch(error => console.log('error'))
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
      </nav>
    </>
  )
}

export default App
