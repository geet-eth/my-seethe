import { SocialURLConstants } from '../Constants'
import dexs from '../assets/dexscreener.png'
import jup from '../assets/jup.png'
import twt from '../assets/twitter.png'
import tg from '../assets/telegram.png'

export const Navigation = () => {
  return (
    <div class="logo-container z-10 ">
      <a href={SocialURLConstants.dexScreener} target="_blank" class="logo logo-top-left">
        <img src={dexs} alt="DexScreener" />
      </a>
      <a href={SocialURLConstants.jupiter} target="_blank" class="logo logo-top-right">
        <img src={jup} alt="Jupiter (jup.ag)" />
      </a>
      <a href={SocialURLConstants.twitter} target="_blank" class="logo logo-bottom-left">
        <img src={twt} alt="Twitter" />
      </a>
      <a href={SocialURLConstants.telegram} target="_blank" class="logo logo-bottom-right">
        <img src={tg} alt="Telegram" />
      </a>
    </div>
  )
}