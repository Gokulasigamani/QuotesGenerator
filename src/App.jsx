import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './index.css'
import { useState } from 'react';

function App() {

     let [Quotes,setQuotes]=useState('');

      function GenerateHandler()
      {
        fetch('https://type.fit/api/quotes').then((data)=>
          {
                return data.json()
          }).then((data)=>
          {
            const randomIndex = Math.floor(Math.random() * data.length);
            setQuotes(data[randomIndex].text)
  
          })
      }


   


  
  return(
    <> 
        <main className='w-[100vw] h-[100vh] overflow-hidden' >
           
            <div className='sm:w-[700px] max-sm:w-full text-center max-sm:mt-56 max-sm:p-5 mt-44 m-auto' >

            <h1 className='text-4xl text-black font-bold  '>{Quotes}</h1>
            </div>
             
             
      

            <button onClick={GenerateHandler} className='w-full bg-blue-600 sm:py-10  max-sm:py-5 max-sm:text-2xl absolute bottom-0 text-4xl font-bold text-white  hover:bg-blue-300 hover:text-black transition-all' >Click Here To Generate New Quotes</button>

        </main> 
    </>
  )
}

export default App
