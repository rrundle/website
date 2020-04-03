import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import LightBulb from './icons/LightBulb'
import Navbar from './modules/Navbar'
import './App.css'

const App = () => {
  const [light, setLight] = useState(false)
  const [mouseUp, setUpPosition] = useState(0)
  const [mouseDown, setDownPosition] = useState(0)
  const [chainReset, resetChain] = useState(false)

  const handleDragStart = (e) => {
    const yPosition = e.pageY || e.changedTouches[0].pageY
    setDownPosition(yPosition)
  }

  const handleDragStop = (e) => {
    const yPosition = e.pageY || e.changedTouches[0].pageY
    setUpPosition(yPosition)
    if (yPosition > 0) resetChain(true)
  }

  useEffect(() => {
    if (mouseUp > mouseDown) {
      if ((mouseUp - mouseDown) > 50) {
        if (light) {
          setLight(false)
          setDownPosition(0)
          setUpPosition(0)
        } else {
          setLight(true)
          setDownPosition(0)
          setUpPosition(0)
        }
      }
    }
  }, [chainReset, mouseUp, mouseDown, light])

  return (
    <div className="App">
      <Navbar light={light} />
      <h3 className={light ? 'description' : 'description-off'}>{light ? 'Hi, I\'m Ryan' : 'Hello There'}</h3>
      <h4 className={light ? 'description' : ''}>{light && 'I\'m a Software Engineer'}</h4>
      <div className="light-bright-wrapper">
        <div className={`light-bright ${light ? 'light-bright-on' : ''}`} />
      </div>
      <LightBulb light={light} />
      <Draggable
        axis="y"
        bounds={{ top: 0, bottom: 80 }}
        onStart={handleDragStart}
        onStop={handleDragStop}
        position={chainReset && { x: 0, y: 0 }}
      >
        <div className="draggable-element">
          <div className="chain-wrapper">
            <div className="chain-link" />
            <div className="chain-link" />
            <div className="chain-link" />
            <div className="chain-link" />
            <div className="chain-link" />
          </div>
        </div>

      </Draggable>
    </div>
  )
}

export default App;
