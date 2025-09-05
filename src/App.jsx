import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
