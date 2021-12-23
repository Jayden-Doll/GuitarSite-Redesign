let stringSounds = ["E", "A", "D", "G", "B", "e"];
let stringSoundsC = ["E", "C", "EE", "G", "CC", "e"];

const containerEl = document.querySelector(".container");
const boxes = document.querySelectorAll(".box");
const btnC = document.querySelector(".btn-c");
const btnDefault = document.querySelector(".btn-default");

//Default notes setup
const defaultStrings = () => {
  //Loop over each item in the string array, make each sound a div, and append it to the container
  stringSounds.forEach((stringSound) => {
    const div = document.createElement("div");
    div.classList.add("box");

    div.innerText = stringSound;

    div.addEventListener("mouseover", () => {
      document.querySelector(`#${stringSound}`).play();
    });

    document.querySelector(".container").appendChild(div);
  });
};

//Run defaultStrings setup function
defaultStrings();

//When on another chord, press the default button to go back to default strings setup
const ifDefaultButtonPressed = () => {
  btnDefault.addEventListener("click", () => {
    //Delete the first child of the container until there are no children
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }

    //Switches to the default string setup
    defaultStrings();
  });
};

//C Chord Function
const playChordC = () => {
  btnC.addEventListener("click", () => {
    //On click, remove every child
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }

    //Creates template for C chord note as similarly to the default strings function above
    stringSoundsC.forEach((stringSoundC) => {
      const div = document.createElement("div");
      div.classList.add("box");

      div.innerText = stringSoundC;

      div.addEventListener("mouseover", () => {
        document.querySelector(`#${stringSoundC}`).play();
      });

      document.querySelector(".container").appendChild(div);
    });

    //refer to the ifDefaultButtonPressed function
    ifDefaultButtonPressed();
  });
};

playChordC();
