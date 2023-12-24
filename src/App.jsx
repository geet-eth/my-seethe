import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
// import viteLogo from '/vite.svg'
import logo from './assets/C.png'
import './App.css'
import backdrop from './assets/tickeris.png'
import dexs from './assets/dexscreener.png'
import jup from './assets/jup.png'
import twt from './assets/twitter.png'
import tg from './assets/telegram.png'


// Lock scroll
document.body.style.overflow = 'hidden';

// Unlock scroll
// document.body.style.overflow = 'visible';

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
        <a href="https://dexscreener.com/solana/dwwreqtpsewhuiy8dr53xwvnroam8uvejslenmcg31fc" target="_blank" class="logo logo-top-left"> {/* Position this logo at the top left */}
          <img src={dexs} alt="DexScreener" />
        </a>
        <a href="https://jup.ag/swap/USDC-SEETHE_H838bbwxykb9pjfT9qpXhA3y1sFfNBsrmHk1c9gF7XH1" target="_blank" class="logo logo-top-right"> {/* Position this logo at the top right */}
          <img src={jup} alt="Jupiter (jup.ag)" />
        </a>
        <a href="https://twitter.com/seetheonsolana" target="_blank" class="logo logo-bottom-left"> {/* Position this logo at the bottom left */}
          <img src={twt} alt="Twitter" />
        </a>
        <a href="https://t.me/ZG8uFhLYR6x19bwKsPt17CqT2nRWtXcR" target="_blank" class="logo logo-bottom-right"> {/* Position this logo at the bottom right */}
          <img src= {tg}alt="Telegram" />
        </a>
      </div>

    
     

      {/* <p class="read-the-docs">
      u cant spell SEETHE without ETH
      </p> */}
    </>
  )
}

export default App
