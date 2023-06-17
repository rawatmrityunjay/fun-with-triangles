const base = document.querySelector("#base-measure");
const height = document.querySelector("#height-measure");
const calculateButton = document.querySelector("#calculate-button");
const resultMessage = document.querySelector("#result-message");

calculateButton.addEventListener("click", (e) => {

  e.preventDefault();

  if (base.value > 0 && height.value > 0) {

    const hypo = findHypotenuse(base.value, height.value);

    resultMessage.innerText = `The length of hypotenuse is : ${hypo}`;

    resultMessage.style.color = "rgb(29, 89, 255)";

  } 
  else {

    resultMessage.innerText = "Measure of length must be greater than 0";
    
    resultMessage.style.color = "red";

  }

});

function findHypotenuse(base, height) {

  let hypotenuse = Math.sqrt(base * base + height * height);

  return hypotenuse;

}