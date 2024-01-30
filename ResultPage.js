const result_shareBtn = document.getElementById("result-share");
const closeBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

result_shareBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
