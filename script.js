const showButton = document.getElementById("showButton");
const details = document.getElementById("details");

showButton.addEventListener("click", function () {
  details.classList.toggle("show");

  if (details.classList.contains("show")) {
    showButton.textContent = "Show less";
  } else {
    showButton.textContent = "Read more";
  }
});