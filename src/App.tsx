import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

return (
  <>

  <div className="App">
  

  <nav>Barra de navegação</nav>

  <div className="btn">
    <button>
      Pesquisar
    </button>
  </div>



     <div className="pc">
      <h1>Tela detectada: PC</h1>
      </div>
    
      <div className="device">
      
      
    <div className="cell">
    <h1>Tela detectada: celular</h1>
    </div>

      <div className="tablet">
      <h1>Tela detectada: tablet</h1>
      </div>
  

    

      </div>
    
 

  
  </div>

  
  </>
)
}
export default App
