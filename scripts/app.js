/* Content Fade-In Functionality
--------------------------

*/

//Select all classes with the class of content
const sections = document.querySelectorAll(".content");
//Check for scroll event
window.addEventListener("scroll", checkContent);

//Initial check for content
checkContent();

//Check position of boxes on screen relative to current height
function checkContent() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  //Check the boxes
  sections.forEach((section) => {
    //Gets the top of the element
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("animate");
    }
  });
}

/* Slider Toggle functionality 
------------------------------

*/

// Select Slider Elements
const slider = document.querySelector(".slider");
const sliderBackground = document.querySelector(".slider-background");
const toggleText = document.querySelector(".toggle-text");
const guitarOverlay = document.querySelector(".guitar-overlay");
const chordSelectOverlay = document.querySelector(".chord-select-overlay");

//Event listener for a click on the slider
sliderBackground.addEventListener("click", () => {
  //Switch between enabled and disabled slider classes
  slider.classList.toggle("slider-enabled");
  slider.classList.toggle("slider-disabled");

  //Switch between enabled and disabled toggle text classes
  toggleText.classList.toggle("text-enabled");
  toggleText.classList.toggle("text-disabled");

  guitarOverlay.classList.toggle("guitar-overlay");
  chordSelectOverlay.classList.toggle("chord-select-overlay");

  menuItems.forEach((item) => {
    if (item.classList.contains("greyed")) {
      item.classList.toggle("greyed");
      item.classList.toggle("selected");
    } else if (item.classList.contains("selected")) {
      item.classList.toggle("selected");
      item.classList.toggle("greyed");
    }
  });
});

/* Guitar String Functionality
------------------------------

*/

const menuItems = document.querySelectorAll(".menu-item");

//Highlights a menu item when clicked on
const selectItem = () => {
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((item) => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
        }
      });
      item.classList.add("selected");
    });
  });
};

selectItem();

//Select buttons and container
const container = document.querySelector(".guitar-strings");
const btnDefault = document.querySelector("#default");
const btnA = document.querySelector(".btn-A");
const btnC = document.querySelector(".btn-C");
const btnD = document.querySelector(".btn-D");
const btnE = document.querySelector(".btn-E");
const btnF = document.querySelector(".btn-F");
const btnG = document.querySelector(".btn-G");

const allSounds = {
  default: ["E", "A", "D", "G", "B", "e"],
  A: ["Muted", "A", "E2", "A2", "CC2", "e"],
  C: ["Muted", "C3", "E2", "G", "C1", "e"],
  D: ["Muted", "Muted", "D", "A2", "D3", "ff2"],
  E: ["E", "B2", "E2", "GG1", "B", "e"],
  F: ["F1", "C3", "F3", "A2", "C1", "highf1"],
  G: ["G3", "B2", "D", "G", "D3", "highg3"],
};

const generateStringSounds = (chord) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  allSounds[chord].forEach((stringSound) => {
    const div = document.createElement("div");
    div.classList.add("string");

    div.addEventListener("mouseover", () => {
      document.querySelector(`#${stringSound}`).play();
    });

    document.querySelector(".guitar-strings").appendChild(div);
  });
};

generateStringSounds("default");

btnDefault.addEventListener("click", () => {
  generateStringSounds("default");
});

btnA.addEventListener("click", () => {
  generateStringSounds("A");
});

btnC.addEventListener("click", () => {
  generateStringSounds("C");
});

btnD.addEventListener("click", () => {
  generateStringSounds("D");
});

btnE.addEventListener("click", () => {
  generateStringSounds("E");
});

btnF.addEventListener("click", () => {
  generateStringSounds("F");
});

btnG.addEventListener("click", () => {
  generateStringSounds("G");
});
