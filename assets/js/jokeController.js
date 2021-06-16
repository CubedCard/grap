const choice = document.getElementById("type");
const punchlineField = document.getElementById("punchline");

choice.addEventListener("change", () => {
  const type = choice.value;
  const punchline = getJoke(type);

  punchlineField.innerText = punchline;
});
