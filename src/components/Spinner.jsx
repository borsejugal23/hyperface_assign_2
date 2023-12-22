import React from 'react'

import WheelComponent from "react-wheel-of-prizes"
// import 'react-wheel-of-prizes/dist/index.css'

const Spinner = () => {
  const segments = [
    'won 20',
    'won 70',
    'won 10',
    'won a voucher'
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0'
 
  ]
  const onFinished = (winner) => {
    console.log(winner)
  }
  return (
    <div>
        <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment='won 10'
      onFinished={(winner) => onFinished(winner)}
      primaryColor=''
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={200}
      upDuration={100}
      downDuration={1000}
      fontFamily='Arial'
    />
    </div>
  )
}

export default Spinner