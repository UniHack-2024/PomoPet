import "./mainMenu.css";
import volume_button from "./assets/volume_button.png";
import sun from "./assets/sun.png";
import pomoPetTheme from "./assets/PomoPetTheme.mp3";
import { useState } from "react";

function Popup({ pageShown }: { pageShown: string }) {
  console.log(pageShown);

  if (pageShown == "about") {
    return (
      <div id="pop-up">
        <h3>About</h3>
        <p> {pomoPetInstructions} </p>
      </div>
    );
  } else if (pageShown == "authors") {
    return (
      <div id="pop-up">
        <h3>Authors</h3>
        <p> {projectAuthors} </p>
      </div>
    );
  } else {
    return <></>;
  }
}

function LeadeBoard() {
  return (
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
  );
}

function AboutButton({
  pageShown,
  setPageShown,
}: {
  pageShown: string;
  setPageShown: any;
}) {
  if (pageShown == "normal") {
    return (
      <button
        id="about-button"
        className="small-button"
        onClick={() => {
          setPageShown("about");
          console.log("here");
        }}
      >
        {" "}
        About{" "}
      </button>
    );
  } else {
    return (
      <button
        id="about-button"
        className="small-button"
        onClick={() => setPageShown("normal")}
      >
        {" "}
        Back{" "}
      </button>
    );
  }
}

const pomoPetInstructions = `Pomo Pet is your new favourite virtual Pet!\n
Time management and exercise are two great lifestyle qualities that many people in the younger generation are struggling with.
However now with Pomo Pet you can achieve them in a more engaging way then ever before!
First make sure to login to your existing account or create a new one!
Then you will be ready to start studying with Pomo Pet!

Pomo Pet is based on the Pomodoro technique.
The Pomodoro Technique is an attention remedy for perfectionists and procrastinators of all kinds.
Work in focused intervals. Take a break. Repeat.

Here is specifically how Pomo Pet works:
Step 1: Pick a task.
Step 2: Press the Start Studying Button.
Step 3: While Pomo Pet is sleeping work on the task you picked for 25min!
Step 4: You're ready to take a break and Pomo Pet is now awake and wants to play a game with you.
Step 5: Repeat 4 times or for 2 hours all together.
Step 6: Now you have had enough time studying, its time to exercise like for example going for a walk, and Pomo Pet thinks thats a great idea as well.
Step 7: Compare with your friends!

Who will be the champion of Pomo Pet!!!!!!!!`;

const projectAuthors = `This project was written by:
- David Nye
- Dylan Stevens
- Ray
- Tristan Clinton-Muehr
- Timian
- Uzman Zawhahir`;

export default function MainMenu({ setPlaying }: { setPlaying: any }) {
  const [pageShown, setPageShown] = useState<string>("normal");

  return (
    <div>
      <audio controls loop id="pomoPetAudio">
        <source src={pomoPetTheme} type="audio/mpeg" />
      </audio>

      <img src={sun} id="main-menu-sun" />

      <div className="sky">
        <div id="title">POMO PET</div>
      </div>

      <div className="ground"></div>

      {pageShown == "normal" && <LeadeBoard />}

      {<Popup pageShown={pageShown}></Popup>}

      {pageShown == "normal" && (
        <button id="login-register-button" className="small-button">
          {" "}
          Login/Register{" "}
        </button>
      )}

      <button id="volume-button" className="small-button">
        <img src={volume_button} />
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        id="volume-button-X"
      >
        <line x1="0" y1="0" x2="60" y2="60" stroke="black" stroke-width="5" />
        <line x1="0" y1="60" x2="60" y2="0" stroke="black" stroke-width="5" />
      </svg>

      {pageShown == "normal" && (
        <button id="start-studying-button" onClick={() => setPlaying(true)}>
          {" "}
          Start Studying!
        </button>
      )}

      {<AboutButton pageShown={pageShown} setPageShown={setPageShown} />}

      {pageShown == "normal" && (
        <button
          id="authors-button"
          className="small-button"
          onClick={() => setPageShown("authors")}
        >
          {" "}
          Authors{" "}
        </button>
      )}
    </div>
  );
}
