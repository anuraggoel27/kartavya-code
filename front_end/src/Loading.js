import React from 'react'
import Lottie from "react-lottie"
import * as loading from "./animations/loading1.json"


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


const Loading = () => {
    return (
        <div>
            <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
    )
}

export default Loading
