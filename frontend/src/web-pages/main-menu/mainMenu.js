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