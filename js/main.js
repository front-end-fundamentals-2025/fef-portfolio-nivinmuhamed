//help from classmate Ida Segolsson//

const selfie = document.getElementById("selfie");
const reset = document.getElementById("reset");

selfie.addEventListener("click", function (event) {
  selfie.style.width = "1000px";
});

reset.addEventListener("click", function () {
  selfie.style.width = "10%";
});
