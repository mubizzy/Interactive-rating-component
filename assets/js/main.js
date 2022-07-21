const mainContainer = document.querySelector(".submit__container");
const thanksContainer = document.querySelector(".thank-you__container");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.add("show-menu");
  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML;
    });
  });
});

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block";
  thanksContainer.classList.remove("show-menu");
});
