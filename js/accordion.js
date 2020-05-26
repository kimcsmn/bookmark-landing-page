const acc = document.querySelector(".faq-body");

acc.addEventListener("click", function (e) {
  e.preventDefault();
  const accBtn = e.target;
  accBtn.classList.toggle("active");
  const arrow = e.target.children[0];
  arrow.classList.toggle("reverse");

  const panel = e.target.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});
