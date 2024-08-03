import React from 'react'
import './App.css'
import ReactReveal from './Component/ReactReveal/ReactReveal'
import Carousel from './Component/Carousel/CarouselReact'

const slides = [
  
  "https://th.bing.com/th/id/OIP.EpGeMms-B0TC0cTliTiMzgAAAA?pid=ImgDet&w=186&h=186&c=7&dpr=1.2",
  "https://th.bing.com/th/id/OIP.EpGeMms-B0TC0cTliTiMzgAAAA?pid=ImgDet&w=186&h=186&c=7&dpr=1.2",
  "https://th.bing.com/th/id/OIP.hbFryjsYljbev2qTHfrGiQHaHa?pid=ImgDet&w=186&h=186&c=7&dpr=1.2",
  "https://th.bing.com/th/id/OIP.hbFryjsYljbev2qTHfrGiQHaHa?pid=ImgDet&w=186&h=186&c=7&dpr=1.2",
  "https://th.bing.com/th/id/OIP.hbFryjsYljbev2qTHfrGiQHaHa?pid=ImgDet&w=186&h=186&c=7&dpr=1.2",
  "https://th.bing.com/th/id/OIP.hbFryjsYljbev2qTHfrGiQHaHa?pid=ImgDet&w=186&h=186&c=7&dpr=1.2",
  "https://th.bing.com/th/id/OIP.hbFryjsYljbev2qTHfrGiQHaHa?pid=ImgDet&w=186&h=186&c=7&dpr=1.2",
  "https://th.bing.com/th/id/OIP.hbFryjsYljbev2qTHfrGiQHaHa?pid=ImgDet&w=186&h=186&c=7&dpr=1.2",
]

function App() {
 

  return (
    //<ReactReveal></ReactReveal>
    <main className='App'>
     <div className="max-w-lg">
      <Carousel autoslide={true} autoslideInterval={1000}>
     {slides.map((s)=>(
      <img src={s} alt="" />
     ))}
      </Carousel>
     </div>
  
    </main>
  )
}

export default App
