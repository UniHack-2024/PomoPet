////////////////////////////////////////////////////////////
// ELEMENTS // 
////////////////////////////////////////////////////////////
let areElementsVisible = true;

let aboutButton = document.getElementById('about-button');
let authorsButton = document.getElementById('authors-button');
let startStudyingButton = document.getElementById('start-studying-button');
let volumeButton = document.getElementById('volume-button');
let loginRegisterButton = document.getElementById('login-register-button');
let leaderboard = document.getElementById('leaderboard');
let audioElement = document.getElementById('pomoPetAudio');
let popUpElement = document.getElementById('pop-up');

////////////////////////////////////////////////////////////
// FUNCTIONS // 
////////////////////////////////////////////////////////////

const unhideAllElements = () => {
    aboutButton.style.display = 'inline-block';
    authorsButton.style.display = 'inline-block';
    startStudyingButton.style.display = 'inline-block';
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

const addPopUp = () => {
    popUpElement.style.display = 'block';
}

const removePopUp = () => {
    popUpElement.style.display = 'none';
}

// accepts a string whihc is the title
// the title is also a txt file name which is the paragraph
const changePopUpText = async (category) => {
    let popupHeader = document.querySelector('#pop-up h3');
    let popupParagraph = document.querySelector('#pop-up p');
    let filename = category + ".txt";
    popupHeader.textContent = category;
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Read the text content from the response
        const text = await response.text();
        const formattedText = text.replace(/\n/g, '<br>');
        popupParagraph.innerHTML = formattedText;
    } catch (error) {
        console.error('Error fetching or setting the text: ', error);
    }
};

////////////////////////////////////////////////////////////
// EVENT LISTENERS // 
////////////////////////////////////////////////////////////

aboutButton.addEventListener('click', () => {
    // if it has been clicked already then hide all elemtns otherwise unhide all elemnts
    if (areElementsVisible === true) {
        hideAllElements()
        aboutButton.style.display = 'block';
        areElementsVisible = false;
        addPopUp();
        changePopUpText("About");
        aboutButton.textContent = 'Go Back';
    } else {
        unhideAllElements()
        areElementsVisible = true;
        removePopUp();
        aboutButton.textContent = 'About';
    }
});

loginRegisterButton.addEventListener('click', () => {
    // google code    
});

authorsButton.addEventListener('click', () => {
    // if it has been clicked already then hide all elemtns otherwise unhide all elemnts
    if (areElementsVisible === true) {
        hideAllElements()
        authorsButton.style.display = 'block';
        areElementsVisible = false;
        addPopUp();
        changePopUpText("Authors");
        authorsButton.textContent = 'Go Back';
    } else {
        unhideAllElements()
        areElementsVisible = true;
        removePopUp();
        authorsButton.textContent = 'Authors';
    }
});

volumeButton.addEventListener('click', () => {
    if (!audioElement.paused) {
        audioElement.pause();
    } else {
        audioElement.play();
    }
});
