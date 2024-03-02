import { useEffect, useRef, useState } from 'react'
import { LoginPage } from './login-page/LoginPage';
import { GameInterface } from './game-interface/GameInterface';

function App() {
  const [playing, setPlaying] = useState<boolean>(false);

  return (
    <>
      { !playing ? <LoginPage setPlaying={setPlaying}/> : <GameInterface></GameInterface>}
    </>
  )
}

export default App
