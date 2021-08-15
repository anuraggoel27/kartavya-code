import React from 'react'
import Lottie from "react-lottie"
import * as done from "./animations/done.json"


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: done.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


const Done = () => {
    return (
        <div>
            <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
    )
}

export default Done
