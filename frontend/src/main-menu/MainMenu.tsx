import './mainMenu.css';
import volume_button from './images/volume_button.png';
import sun from './images/sun.png';

export default function MainMenu({setPlaying}: {setPlaying: any}) {
  return (
    <div>
        <audio controls loop id="pomoPetAudio" autoPlay>
          <source src="/audio/PomoPetTheme.mp3" type="audio/mpeg"/>
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

        <button id="login-register-button" className ="small-button"> Login/Register </button>
        
        <button id="volume-button" className="small-button">
            <img src={volume_button}/>
        </button>

        <button id="start-studying-button" onClick={() => setPlaying(true)}> Start Studying!</button>

        <button id="authors-button" className="small-button"> Authors </button>
        <button id="about-button" className="small-button"> About </button>

        <script src="./mainMenu.js"></script>
    </div>
  );
};