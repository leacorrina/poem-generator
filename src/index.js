function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Since feeling is first",
    autoStart: true,
    delay: 2,
    cursor: "✨",
  });
}

let poemFormElement = document.querySelector("#poem-request-form");
poemFormElement.addEventListener("submit", generatePoem);
