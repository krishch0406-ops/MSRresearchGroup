
const buttons = document.querySelectorAll(".tab-button");
const sections = document.querySelectorAll(".tab-content");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Here it should remove the "active" from every tab and section
    buttons.forEach(function (b) {
      b.classList.remove("active");
    });
    sections.forEach(function (s) {
      s.classList.remove("active");
    });

    // This will add the "active" to the clicked tab and its section
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});