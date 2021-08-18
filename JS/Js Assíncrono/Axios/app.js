var button = document.querySelector("button#app ");

button.addEventListener("click", function () {
  axios
    .get("https://api.github.com/users")
    .then(function (response) {
      console.log("deu certo!", response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("finalizou!");
    });
});
