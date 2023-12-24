import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
// import viteLogo from '/vite.svg'
import logo from './assets/C.png'
import './App.css'
import backdrop from './assets/tickeris.png'


// Lock scroll
document.body.style.overflow = 'hidden';

// Unlock scroll
document.body.style.overflow = 'visible';

function App() {
  const [showLinks, setShowLinks] = createSignal(false);

  return (
    <>
      {/* <div>
        <a href="https://dexscreener.com" target="_blank">
          <img src={logo} class="logo" alt="Vite logo" />
        </a>
      
      </div> */}
      <div>
        <a>
          <img src={backdrop} class = "backdrop"></img>
        </a>
      </div>
      <h1>$seETHe</h1>
      <div class="logo-container">
        <a href="#" class="logo logo-top-left"> {/* Position this logo at the top left */}
          <img src="path_to_logo" alt="Logo 1" />
        </a>
        <a href="#" class="logo logo-top-right"> {/* Position this logo at the top right */}
          <img src="path_to_logo" alt="Logo 2" />
        </a>
        <a href="#" class="logo logo-bottom-left"> {/* Position this logo at the bottom left */}
          <img src="path_to_logo" alt="Logo 3" />
        </a>
        <a href="#" class="logo logo-bottom-right"> {/* Position this logo at the bottom right */}
          <img src="path_to_logo" alt="Logo 4" />
        </a>
      </div>

    
     

      {/* <p class="read-the-docs">
      u cant spell SEETHE without ETH
      </p> */}
    </>
  )
}

export default App
