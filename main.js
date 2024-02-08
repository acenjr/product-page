document.addEventListener("DOMContentLoaded", function () {
  const readMoreLink = document.getElementById("readMoreLink");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  readMoreLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (popup.style.display === "none" || popup.style.display === "") {
      popup.style.display = "block";
      readMoreLink.innerText = "Back";
    } else {
      popup.style.display = "none";
      readMoreLink.innerText = "Read More";
    }
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    readMoreLink.innerText = "Read More";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
      readMoreLink.innerText = "Read More";
    }
  });
});
