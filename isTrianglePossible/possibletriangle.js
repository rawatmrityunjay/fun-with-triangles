const checkButton = document.querySelector("#check-button");

const inputs = document.querySelectorAll(".input-area");

const resultMessage = document.querySelector("#result-message");


checkButton.addEventListener("click", isTrianglePossible);

function isTrianglePossible() {

  const angleSum = sumOfAngles(

    Number(inputs[0].value),

    Number(inputs[1].value),

    Number(inputs[2].value)

  );

  if (Number(inputs[0].value) > 0 && Number(inputs[1].value) > 0 && Number(inputs[2].value) > 0) {

        if (angleSum === 180) {

        resultMessage.innerText = "Yes, the given triangle is possible. ✅";

        resultMessage.style.color = "green";

        }

        else{

        resultMessage.innerText = "No, the given triangle is not possible. ❌";

        resultMessage.style.color = "red";

        }

    } 

    else {

        resultMessage.innerText = "Angles must be greater than 0 💁🏻‍♂️";

        resultMessage.style.color = "red";

    }

}

function sumOfAngles(a1, a2, a3) {

  return a1 + a2 + a3;

}