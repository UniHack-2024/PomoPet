import './mainMenu.css';
import volume_button from './assets/volume_button.png';
import sun from './assets/sun.png';

export default function MainMenu({setPlaying}: {setPlaying: any}) {
  return (
    <div>
        <audio controls loop id="pomoPetAudio">
            <source src="/assets/PomoPetTheme.mp3" type="audio/mpeg"/>
        </audio>
        
        <img src={sun} id="main-menu-sun"/>
        
        <div className ="sky">
            <div id="title">POMO PET</div>
        </div>
        
        <div className ="ground"></div>

        <div id="leaderboard">
            <h3>Leaderboard</h3>
            <ol>
                <li>first</li>
                <li>second</li>
                <li>third</li>
                <li>fourth</li>
                <li>fifth</li>
            </ol>
        </div>

        <div id="pop-up">
            <h3>Sample </h3>
            <p> Sample </p>
        </div>

        <button id="login-register-button" className ="small-button"> Login/Register </button>
        
        <button id="volume-button" className="small-button">
            <img src={volume_button}/>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" id="volume-button-X">
            <line x1="0" y1="0" x2="60" y2="60" stroke="black" stroke-width="5"/>
            <line x1="0" y1="60" x2="60" y2="0" stroke="black" stroke-width="5"/>
        </svg>

        <button id="start-studying-button" onClick={() => setPlaying(true)}> Start Studying!</button>

        <button id="authors-button" className="small-button"> Authors </button>
        <button id="about-button" className="small-button"> About </button>
    </div>
  );
}