function getJoke(type) {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open(
    "GET",
    "https://official-joke-api.appspot.com/jokes/" + type,
    true
  );

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      return (document.getElementById("punchline").innerText =
        data.setup + "\n" + data.punchline);
    } else {
      console.log("error");
    }
  };

  // Send request
  request.send();
}
