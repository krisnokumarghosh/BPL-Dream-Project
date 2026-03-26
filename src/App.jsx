
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  
  const playersPromise = fetchPlayers();
  const [coin , setCoin] = useState(30000);
  

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense 
      fallback={<span className="loading loading-infinity loading-xl"></span>}>
      <Players 
      coin={coin}
      setCoin={setCoin}
      playersPromise={playersPromise}></Players>
      </Suspense>
      <Footer></Footer>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
