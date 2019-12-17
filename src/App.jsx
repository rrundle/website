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
  const [chainPulled, setChainPulled] = useState(false)
  const [reminderText, setReminderText] = useState(false)

  const handleDragStart = (e) => {
    const yPosition = e.pageY || e.changedTouches[0].pageY
    setDownPosition(yPosition)
  }

  const handleDragStop = (e) => {
    const yPosition = e.pageY || e.changedTouches[0].pageY
    setUpPosition(yPosition)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('running timeout!!');
      if (!light) setReminderText(true)
    }, 10000)

    if (mouseUp > mouseDown && (mouseUp - mouseDown) > 37) {
      setLight(true)
    }
    if (light) {
      resetChain(true)
    }
    if (mouseUp > mouseDown) {
      setChainPulled(true)
    }
  }, [chainPulled, chainReset, mouseUp, mouseDown, light])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar light={light} />
        <h3>{light ? 'Hi, I\'m Ryan Rundle' : 'Hello There'}</h3>
        <div className="light-bright-wrapper">
          <div className={`light-bright ${light ? 'light-bright-on' : ''}`} />
        </div>
        {reminderText && !light && <div className="reminder">Turn on the dang light</div>}
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
      </header>
    </div>
  )
}

export default App;
