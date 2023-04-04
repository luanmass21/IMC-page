const calculate = document.getElementById("calcular");

function imc() {
  const namePerson = document.getElementById("nome").value;
  const height = document.getElementById("altura").value;
  const weight = document.getElementById("peso").value;
  const inputResult = document.getElementById("resultado");

  if (namePerson && height && weight) {
    const finalSum = (weight / (height * height)).toFixed(2);
    // inputResult.innerText = finalSum.toFixed(2);

    let textShown = "";

    if (finalSum < 18.5) {
      textShown = "Abaixo do peso";
    } else if (finalSum < 25) {
      textShown = "com o peso ideal";
    } else if (finalSum < 30) {
      textShown = "acima do peso";
    } else if (finalSum < 35) {
      textShown = "com obesidade grau 1";
    } else if (finalSum > 40) {
      textShown = "com obesidade grau 2";
    } else {
      textShown = "com obesidade grau 3";
    }

    inputResult.innerText = `${namePerson} seu IMC é ${finalSum} e você está ${textShown}`;
  } else {
    inputResult.innerText = "Preencha todos os campos";
  }
}
calculate.addEventListener("click", imc);
