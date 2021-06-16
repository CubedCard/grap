const choice = document.getElementById("type");
const newButton = document.getElementById("new-joke-button");
const punchlineField = document.getElementById("punchline");

choice.addEventListener("change", () => {
  newJoke();
});

newButton.addEventListener("click", () => {
  newJoke();
});

async function newJoke() {
  const type = "random";
  const punchline = await getJoke(type);
}
