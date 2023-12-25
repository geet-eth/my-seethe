import './App.css'
import backdrop from './assets/tickeris.png'

import { Navigation } from './components/Navigation'




function App() {

  return (
    <>


      <div class='main-container z-10'>


        {/* <div class="absolute w-full flex flex-col justify-center self-center mx-auto z-[-1]"> */}
        {/* <div class="absolute w-full flex flex-col justify-center self-center mx-auto z-[-1] mt-[0] sm:mt-[20rem]"> */}
        <div class="absolute w-full flex flex-col justify-center self-center mx-auto z-[-1] mt-[0] sm:mt-[16rem]">
          {/* <img src={backdrop} class=""></img> */}
          <img src={backdrop} class="mx-auto "></img>
          <h1 class='z-10'>$seETHe</h1>

        </div>


        <Navigation />



      </div>



    </>
  )
}

export default App
