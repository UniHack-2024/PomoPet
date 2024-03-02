import './mainMenu.css';
import React from 'react';
import volume_button from './images/volume_button.png';
import sun from './images/sun.png';

const MainMenu = () => {
  return (
    <div>
        <audio controls autoplay loop id="pomoPetAudio">
            <source src="PomoPetTheme.mp3" type="audio/mpeg"/>
        </audio>
        <img src={sun} id="main-menu-sun"/>
        <div class="sky">
            <div id="title">POMO PET</div>
        </div>
        <div class="ground"></div>

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

        <button id="login-register-button" class="small-button"> Login/Register </button>
        
        <button id="volume-button" class="small-button">
            <img src={volume_button}/>
        </button>

        <button id="start-studying-button"> Start Studying!</button>

        <button id="authors-button" class="small-button"> Authors </button>
        <button id="about-button" class="small-button"> About </button>

        <script src="./mainMenu.js"></script>
    </div>
  );
};

////////////////////////////////////////////////////////////
// ELEMENTS // 
////////////////////////////////////////////////////////////
let areElementsVisible = true;

let aboutButton = document.getElementById('about-button');
let authorsButton = document.getElementById('authors-button');
let startStudyingButton = document.getElementById('start-studying-button');
// let volumeButton = document.getElementById('volume-button');
let loginRegisterButton = document.getElementById('login-register-button');
let leaderboard = document.getElementById('leaderboard');

////////////////////////////////////////////////////////////
// FUNCTIONS // 
////////////////////////////////////////////////////////////

const unhideAllElements = () => {
    aboutButton.style.display = 'inline-block';
    authorsButton.style.display = 'inline-block';
    startStudyingButton.style.display = 'inline-block';
    // volumeButton.style.display = 'none';
    loginRegisterButton.style.display = 'inline-block';
    leaderboard.style.display = 'block';
};

const hideAllElements = () => {
    loginRegisterButton.style.display = 'none';
    loginRegisterButton.style.display = 'none';
    leaderboard.style.display = 'none';
    aboutButton.style.display = 'none';
    authorsButton.style.display = 'none';
    startStudyingButton.style.display = 'none';
}



////////////////////////////////////////////////////////////
// EVENT LISTENERS // 
////////////////////////////////////////////////////////////

aboutButton.addEventListener('click', () => {
    // if it has been clicked already then hide all elemtns otherwise unhide all elemnts
    if (areElementsVisible === true) {
        hideAllElements()
        aboutButton.style.display = 'block';
        areElementsVisible = false;
        aboutButton.textContent = 'Go Back';
    } else {
        unhideAllElements()
        areElementsVisible = true;
        aboutButton.textContent = 'About';
    }
});

export default MainMenu;
