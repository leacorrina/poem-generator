function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "✨",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "0c82f342fda93oafb0380423bfe8tdd0";
  let prompt = `User instructions: Generate a poem in the Italian language and in the style of e.e.cummings, about ${userInput.value}.`;
  let context =
    "You are an Italian poet who loves writing poems in the style of e.e.cummings. Your mission is to generate a 5 line poem in basic HTML format and separate each line with a <br />. Sign the poem with 'SheCodes AI' inside a <strong> element, displayed below the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  new Typewriter("#poem", {
    strings: `Generating an Italian poem related to ${userInput.value}...`,
    autoStart: true,
    delay: 0.5,
    cursor: "⌛",
  });

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-request-form");
poemFormElement.addEventListener("submit", generatePoem);
