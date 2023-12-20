import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <NavBar/>
        <ItemListContainer greeting={"Pag en construccion"}/>
        <Home/>
      </div>
    
  )
}

export default App
