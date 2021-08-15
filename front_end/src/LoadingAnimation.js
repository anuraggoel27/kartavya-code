import React from 'react'
import Lottie from "react-lottie"
import * as spinner from "./animations/spinner.json"


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: spinner.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


const Spinner = () => {
    return (
        <div>
            <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
    )
}

export default Spinner
