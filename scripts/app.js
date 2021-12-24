const stringSounds = ["E", "A", "D", "G", "B", "e"];
const stringSoundsC = ["MutedE", "C3", "E2", "G", "C1", "e"];
const stringSoundsG = ["G3", "B2", "D", "G", "D3", "g3"];
const stringSoundsD = ["E", "A", "D", "A2", "D3", "ff2"];
const stringSoundsA = ["E", "A", "E2", "A2", "CC2", "e"];
const stringSoundsE = ["E", "B2", "E2", "GG1", "B", "e"];
const stringSoundsF = ["F1", "C3", "F3", "A2", "C1", "f1"];

const containerEl = document.querySelector(".container--sound-list");
const btnDefault = document.querySelector(".btn-default");
const btnC = document.querySelector(".btn-c");
const btnG = document.querySelector(".btn-g");
const btnD = document.querySelector(".btn-d");
const btnA = document.querySelector(".btn-a");
const btnE = document.querySelector(".btn-e");
const btnF = document.querySelector(".btn-f");

//Default notes setup
const defaultStrings = () => {
  //Loop over each item in the string array, make each sound a div, and append it to the container
  stringSounds.forEach((stringSound) => {
    const div = document.createElement("div");
    div.classList.add("container--sound-item");

    div.innerText = stringSound;

    div.addEventListener("mouseover", () => {
      document.querySelector(`#${stringSound}`).play();
    });

    document.querySelector(".container--sound-list").appendChild(div);
  });
};

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
      div.classList.add("container--sound-item");

      div.innerText = stringSoundC;

      div.addEventListener("mouseover", () => {
        document.querySelector(`#${stringSoundC}`).play();
      });

      document.querySelector(".container--sound-list").appendChild(div);
    });

    //refer to the ifDefaultButtonPressed function
    ifDefaultButtonPressed();
  });
};

playChordC();

//G Chord Function
const playChordG = () => {
  btnG.addEventListener("click", () => {
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }

    stringSoundsG.forEach((stringSoundG) => {
      const div = document.createElement("div");
      div.classList.add("container--sound-item");

      div.innerText = stringSoundG;

      div.addEventListener("mouseover", () => {
        document.querySelector(`#${stringSoundG}`).play();
      });

      document.querySelector(".container--sound-list").appendChild(div);
    });

    ifDefaultButtonPressed();
  });
};

playChordG();

//D Chord Function
const playChordD = () => {
  btnD.addEventListener("click", () => {
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }

    stringSoundsD.forEach((stringSoundD) => {
      const div = document.createElement("div");
      div.classList.add("container--sound-item");

      div.innerText = stringSoundD;

      div.addEventListener("mouseover", () => {
        document.querySelector(`#${stringSoundD}`).play();
      });

      document.querySelector(".container--sound-list").appendChild(div);
    });

    ifDefaultButtonPressed();
  });
};

playChordD();

//A Chord Function
const playChordA = () => {
  btnA.addEventListener("click", () => {
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }

    stringSoundsA.forEach((stringSoundA) => {
      const div = document.createElement("div");
      div.classList.add("container--sound-item");

      div.innerText = stringSoundA;

      div.addEventListener("mouseover", () => {
        document.querySelector(`#${stringSoundA}`).play();
      });

      document.querySelector(".container--sound-list").appendChild(div);
    });

    ifDefaultButtonPressed();
  });
};

playChordA();

//E Chord Function
const playChordE = () => {
  btnE.addEventListener("click", () => {
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }

    stringSoundsE.forEach((stringSoundE) => {
      const div = document.createElement("div");
      div.classList.add("container--sound-item");

      div.innerText = stringSoundE;

      div.addEventListener("mouseover", () => {
        document.querySelector(`#${stringSoundE}`).play();
      });

      document.querySelector(".container--sound-list").appendChild(div);
    });

    ifDefaultButtonPressed();
  });
};

playChordE();

//F Chord Function
const playChordF = () => {
  btnF.addEventListener("click", () => {
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }

    stringSoundsF.forEach((stringSoundF) => {
      const div = document.createElement("div");
      div.classList.add("container--sound-item");

      div.innerText = stringSoundF;

      div.addEventListener("mouseover", () => {
        document.querySelector(`#${stringSoundF}`).play();
      });

      document.querySelector(".container--sound-list").appendChild(div);
    });

    ifDefaultButtonPressed();
  });
};

playChordF();
