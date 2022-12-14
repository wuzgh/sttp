import React from 'react';
import Form from './Form';

const Handler = () => {

  var body = document.body

  function backgroundColor(input) {
  /*
    CHECK IF PREFIX FOR EACH WEBSITE WAS TYPED
    THEN APPLY THE BACKGROUND COLOR
  */
    switch (true) {

    // REDDIT
    case /^r$/g.test(input):
    case /^r\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(255, 132, 86), rgb(255, 69, 0))";
      body.style.color = "#ffffff";
      break;

    // TWITTER
    case /^tt\/+/g.test(input):
    case /^tt$/g.test(input):
    case /^tt:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(29, 161, 242), rgb(25, 96, 143))";
      body.style.color = "#ffffff";
      break;

    // YOUTUBE
    case /^y\/+/g.test(input):
    case /^y$/g.test(input):
    case /^y:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(205, 32, 31), rgb(205, 76, 31))";
      body.style.color = "#ffffff";
      break;

    // GITHUB
    case /^g\/+/g.test(input):
    case /^g$/g.test(input):
    case /^g:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(28, 33, 40), rgb(45, 51, 59)";
      body.style.color = "#ffffff";
      break;

    // INSTAGRAM
    case /^i\/+/g.test(input):
    case /^i$/g.test(input):
      body.style.backgroundImage = "linear-gradient(45deg, rgb(64, 93, 230), rgb(88, 81, 219), rgb(131, 58, 180), rgb(193, 53, 132), rgb(225, 48, 108), rgb(253, 29, 29)";
      body.style.color = "#ffffff";
      break;

    // TWITCH
    case /^tw\/+/g.test(input):
    case /^tw$/g.test(input):
    case /^tw:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(169, 112, 255), rgb(67, 44, 101)";
      body.style.color = "#ffffff";
      break;

    // MONKEYTYPE
    case /^mk\/+/g.test(input):
    case /^mk$/g.test(input):
      body.style.backgroundColor = "#323437";
      body.style.color = "#ffffff";
      break;

    // SPOTIFY
    case /^s\/+/g.test(input):
    case /^s$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(29, 211, 94), rgb(30, 215, 96)";
      body.style.color = "#ffffff";
      break;

    // WHATSAPP
    case /^w\/+/g.test(input):
    case /^w$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(37, 211, 102), rgb(18, 140, 126), rgb(7, 94, 84))";
      body.style.color = "#ffffff";
      break;

    // TRANSLATOR
    case /^tr\/+/g.test(input):
    case /^tr$/g.test(input):
    case /^tr:/g.test(input):
      body.style.backgroundColor = "rgb(26, 115, 232)";
      body.style.color = "#ffffff";
      break;

    // DISCORD
    case /^dc\/+/g.test(input):
    case /^dc$/g.test(input):
      body.style.backgroundColor = "#7289da";
      body.style.color = "#ffffff";
      break;

    // GMAIL
    case /^m\/+/g.test(input):
    case /^m$/g.test(input):
      body.style.backgroundColor = "#dd5145";
      body.style.color = "#ffffff";
      break;

    // NETFLIX
    case /^n\/+/g.test(input):
    case /^n$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #E50914, #CB020C)";
      body.style.color = "#ffffff";
      break;

    // HACKTHEBOX 
    case /^htb\/+/g.test(input):
    case /^htb$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #1A2332, #111927)";
      body.style.color = "#9FEF00";
      break;
    
    // TRYHACKME
    case /^thm\/+/g.test(input):
    case /^thm$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #1C2538, #161E2D)";
      body.style.color = "#ffffff";
      break;

		// PRIME VIDEO
		case /^pv\/+/g.test(input):
		case /^pv$/g.test(input):
			body.style.backgroundColor = "#1b242f";
			body.style.color = "#ffffff";
			break;

		case /^p\/+/g.test(input):
		case /^p$/g.test(input):
			body.style.backgroundColor = "#c42027";
			body.style.color = "#ffffff";
			break;

    default:
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#00040a";
      body.style.color = "#f7f5f6";
      break;
    } 
  }

  React.useEffect(() => {
    // Escape to clean the search input
    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case "Escape":
          Clock.style.display = "block";
          Search.value = "";
          Search.style.display = "none";
          Search.blur();
        case "ScrollLock":
        case "AltLeft":
        case "AltRight":
        case "ControlLeft":
        case "ControlRight":
        case "ShiftRight":
        case "ShiftLeft":
        case "CapsLock":
        case "Tab":
        case "OsLeft":
        case "OSRight":
        case "Enter":
        case "Backspace":
          return;
        default: 
          Clock.style.display = "none";
          Search.style.display = "block";
          Search.focus();
      }
    })

    // Check if search input is empty to blur the search field
    Search.addEventListener('keyup', (event) => {
      if (Search.value == "") {
        Search.style.display = "none";
        Search.blur();
        Clock.style.display = "block";
      } else {
        backgroundColor(Search.value)
      }
    })
    
    Search.addEventListener('blur', () => {
      Search.style.display = "none";
      Clock.style.display = "block";
      Search.value = "";

      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#00040a";
      body.style.color = "#f7f5f6";
      Clock.style.color = "#f7f5f6";
    })


  });

      

}

export default Handler
