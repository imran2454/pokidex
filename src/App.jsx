import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomeRouter from './Routes/Route'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer-pokidex'>
     <h1 id="pokedesk-heading">
      <Link to='/'>pokedesk</Link>
      </h1>
     <CustomeRouter/>
    </div>
  )
}

export default App
