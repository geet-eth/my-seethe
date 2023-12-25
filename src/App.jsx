import './App.css'
import backdrop from './assets/tickeris.png'
import { SocialURLConstants } from './Constants'
import dexs from './assets/dexscreener.png'
import jup from './assets/jup.png'
import twt from './assets/twitter.png'
import tg from './assets/telegram.png'


function App() {

  return (
    <div class='main-container'>
      {/* Top nav */}

      <div class="logo-container z-10 ">
        <a href={SocialURLConstants.dexScreener} target="_blank" class="logo-img">
          <img src={dexs} alt="DexScreener" />
        </a>
        <a href={SocialURLConstants.jupiter} target="_blank" class="logo-img">
          <img src={jup} alt="Jupiter (jup.ag)" />
        </a>
      </div>

      {/* Seethe header image */}
      <div class=" w-full flex flex-col justify-center self-center mx-auto z-[-1] ">
        <img src={backdrop} class="mx-auto "></img>
        <h1 class='z-10'>$seETHe</h1>

      </div>

      {/* Bottom Nav */}
      <div class="logo-container z-10 ">
        <a href={SocialURLConstants.twitter} target="_blank" class="logo-img">
          <img src={twt} alt="Twitter" />
        </a>
        <a href={SocialURLConstants.telegram} target="_blank" class="logo-img">
          <img src={tg} alt="Telegram" />
        </a>
      </div>


      <footer class='mt-[7%] italic text-black'>
        You can't spell seethe without ETH
      </footer>

    </div >
  )
}

export default App
