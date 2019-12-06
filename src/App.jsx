import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import './App.css'

const App = () => {
  const [light, setLight] = useState(false)
  const [mouseUp, setUpPosition] = useState(0)
  const [mouseDown, setDownPosition] = useState(0)
  const [chainReset, resetChain] = useState(false)
  const [chainPulled, setChainPulled] = useState(false)

  const handleDragStart = (e) => {
    setDownPosition(e.pageY)
  }

  const handleDragStop = (e) => {
    setUpPosition(e.pageY)
  }

  useEffect(() => {
    if (mouseUp > mouseDown && (mouseUp - mouseDown) > 50) {
      setLight(true)
    }
    if (light) {
      resetChain(true)
    }
    if (mouseUp > mouseDown) {
      setChainPulled(true)
    }
    if (chainPulled) {
      resetChain(true)
    }
  }, [chainPulled, chainReset, mouseUp, mouseDown, light])

  return (
    <div className="App">
      <header className={`App-header ${light ? 'App-header-on' : 'App-header-off'}`}>
        <h3>Hello There</h3>
        <div className={`light-bright ${light && 'light-bright-on'}`} />
        <div className="light-wrapper">
          <div className={`light-bulb ${light ? 'light-bulb-light' : 'light-bulb-dark'}`} />
        </div>
        <Draggable
          axis="y"
          bounds={{
            top: 0,
            bottom: 100
          }}
          onStart={handleDragStart}
          onStop={handleDragStop}
          position={chainReset && {
            x: 0, y: 0
          }}
        >
          <div className="draggable-element">
            <div className="chain-wrapper">
              <div className="chain-link" />
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
