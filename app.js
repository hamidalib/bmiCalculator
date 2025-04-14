let calcBtn = document.getElementById("calcBtn");
const heightSlider = document.getElementById("heightSlider");
const weightSlider = document.getElementById("weightSlider");
const height = document.getElementById("height");
const toastContainer = document.getElementById("toastContainer");
const weight = document.getElementById("weight");
let bmiMsg = document.getElementById("bmiMsg");

heightSlider.addEventListener("input", function () {
  document.getElementById("height").value = heightSlider.value;
});
weightSlider.addEventListener("input", function () {
  document.getElementById("weight").value = weightSlider.value;
});

height.addEventListener("input", function () {
  heightSlider.value = this.value;
});
weight.addEventListener("input", function () {
  weightSlider.value = this.value;
});

calcBtn.addEventListener("click", function () {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmiResult = document.getElementById("resultNumber");
  let resultBG = document.getElementById("resultCircle");
  let bmiCat = document.getElementById("bmiCat");

  if (height === "" || weight === "") {
    alert("Please fill in all fields.");
    return;
  }
  let result = (weight * 10000) / (height * height);

  document.getElementById("tempText").style.display = "none";
  resultCircle.classList.remove("hidden");
  resultBox.classList.remove("justify-center");
  resultNumber.classList.remove("hidden");
  bmiCatText.classList.remove("hidden");
  bmiCat.classList.remove("hidden");
  bmiMeter.classList.remove("hidden");

  bmiResult.innerHTML = result.toFixed(2);

  if (result < 18.5) {
    resultBG.style.backgroundColor = "#33C3F0";
    bmiCat.innerHTML = "Underweight";
    bmiCat.style.color = "#33C3F0";
  } else if (result >= 18.5 && result < 24.9) {
    resultBG.style.backgroundColor = "#4ADE80";
    bmiCat.innerHTML = "Normal weight";
    bmiCat.style.color = "#4ADE80";
  } else if (result >= 25 && result < 29.9) {
    resultBG.style.backgroundColor = "#FBBF24";
    bmiCat.innerHTML = "Overweight";
    bmiCat.style.color = "#FBBF24";
  } else {
    resultBG.style.backgroundColor = "#F87171";
    bmiCat.innerHTML = "Obesity";
    bmiCat.style.color = "#F87171";
  }

  toastContainer.classList.remove("hidden");
  bmiMsg.innerHTML = `Your BMI is ${result.toFixed(2)}.`;

  setTimeout(() => {
    toastContainer.classList.add("hidden");
  }, 3000);
});
