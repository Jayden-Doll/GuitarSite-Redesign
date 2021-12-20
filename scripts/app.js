const stringSounds = ["lowE", "A", "D", "G", "B", "highE"];

stringSounds.forEach((stringSound) => {
  const div = document.createElement("div");
  div.classList.add("box");

  div.innerText = stringSound;

  div.addEventListener("mouseover", () => {
    document.querySelector(`#${stringSound}`).play();
  });

  document.querySelector(".container").appendChild(div);
});
