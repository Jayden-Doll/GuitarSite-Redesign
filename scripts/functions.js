const containerEl = document.querySelector(".container");
const btnC = document.querySelector(".btn-c");

let stringSounds = ["E", "A", "D", "G", "B", "e"];
let stringSoundsC = ["C", "EE", "GG", "CC", "ee"];

//Default notes
export function defaultStrings() {
  stringSounds.forEach((stringSound) => {
    const div = document.createElement("div");
    div.classList.add("box");

    div.innerText = stringSound;

    div.addEventListener("mouseover", () => {
      document.querySelector(`#${stringSound}`).play();
    });

    document.querySelector(".container").appendChild(div);
  });
}

//C Chord Function
export function PlayChordC() {
  btnC.addEventListener("click", () => {
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }
  });
}

module.exports = { defaultStrings, PlayChordC };
