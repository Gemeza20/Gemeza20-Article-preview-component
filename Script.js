const shareBtn = document.getElementById("share");
const box = document.querySelector(".box")

shareBtn.addEventListener("click", () => {
    box.classList.toggle("hidden");
});