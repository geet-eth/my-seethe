import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
// import viteLogo from '/vite.svg'
import logo from './assets/C.png'
import './App.css'
import backdrop from './assets/IMG_9014.jpg'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        <a href="https://dexscreener.com" target="_blank">
          <img src={logo} class="logo" alt="Vite logo" />
        </a>
      
      </div>
      <div>
        <a>
          <img src={backdrop} class = "backdrop"></img>
        </a>
      </div>
      <h1>$seETHe</h1>
      <div class="card">
      <button onClick={() => window.location.href = 'https://telegram.com'}>
        Go to Telegram
      </button>
      </div>

      <p class="read-the-docs">
      u cant spell SEETHE without ETH
      </p>
    </>
  )
}

export default App
