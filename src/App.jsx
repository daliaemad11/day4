// import { useEffect } from 'react'
import './App.css'
import Personaldata from './componants/Personaldata/Personal'
import { useState } from 'react'
import Carddetails from './componants/Carddetails/Carddetails'

function App() {
  const [arrayofobject,setarrayofobject]=useState([
    {
      "cardname":"Work",
      "cardtime":"32hrs",
      "carddate":"last week-36hrs",
      "cardlogo":"../public/images/icon-work.svg",
      "cardcolor":"hsl(15, 100%, 70%)",
      "uniqueid":1
  },
  {
      "cardname":"Play",
      "cardtime":"10hrs",
      "carddate":"last week-8hrs",
      "cardlogo":"./src/assets/images/icon-play.svg",
      "cardcolor":"hsl(195, 74%, 62%)",
      "uniqueid":2
  },
  {
      "cardname":"Study",
      "cardtime":"4hrs",
      "carddate":"last week-7hrs",
      "cardlogo":"./src/assets/images/icon-study.svg",
      "cardcolor":"hsl(348, 100%, 68%)",
      "uniqueid":3
  },
  
  {
      "cardname":"Exercise",
      "cardtime":"4hrs",
      "carddate":"last week-5hrs",
      "cardlogo":"./src/assets/images/icon-exercise.svg",
      "cardcolor":"hsl(145, 58%, 55%)",
      "uniqueid":4
  },
  {
      "cardname":"Social",
      "cardtime":"5hrs",
      "carddate":"last week-10hrs",
      "cardlogo":"./src/assets/images/icon-social.svg",
      "cardcolor":"hsl(264, 64%, 52%)",
      "uniqueid":5
  },
  {
      "cardname":"Selfcare",
      "cardtime":"2hrs",
      "carddate":"last week-2hrs",
      "cardlogo":"./src/assets/images/icon-self-care.svg",
      "cardcolor":"hsl(43, 84%, 65%)",
      "uniqueid":6
  }
  ]);
  // useEffect(()=>{
  //   function callapi(){
  // console.log('dalia')
  // fetch('http://localhost:3000/activities').then((response)=>{
  //   return response.json()
  // })
  // .then((finalresult)=>{
  //   setarrayofobject(finalresult)
  // })
  //   }
  //   callapi()
  // },[])
  return (
   <main>
    <Personaldata></Personaldata>
    <div id='allcards'>
      {arrayofobject.map((item)=>{
        return(<>

        <Carddetails
         key={item.uniqueid}
         cardname={item.cardname}
        cardtime={item.cardtime}
        cardlogo={item.cardlogo}
        carddate={item.carddate}
        cardcolor={item.cardcolor}
        ></Carddetails>
        </>
         
        ) 
      })}
    </div>

   </main>
  )
}

export default App
