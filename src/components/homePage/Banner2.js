import React from "react"
import {navigate} from 'gatsby'

const Banner2 = () => {
  return (
    <div class="w-full flex flex-col justify-center align-middle py-20 back">
      <div class="flex flex-col justify-center align-middle lg:px-0 sm: px-10">
        <h1 class="text-white text-center sm: text-gray-400 lg:text-2xl tracking-widest sm: text-2xl ">
          Build a modern react-native app UI with 
        </h1>
        <h1 class="text-white text-center lg:text-5xl lg:py-5 sm: text-4xl sm: text-gray-100 lg:pb-0 sm: py-5">
          {" "}
          Lights Library
        </h1>
        <button class="lg:text-xl mt-10 lg:w-64 lg:py-2 rounded-lg text-white m-auto bg-green-600 sm: w-3/6 sm: p-2 " onClick={()=>{navigate('/gettingStarted')}}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Banner2
