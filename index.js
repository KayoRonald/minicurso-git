document.getElementById("calcular").addEventListener("click", () =>{
  const valor1 = Number(document.getElementById("valor-1").value);
  const valor2 = Number(document.getElementById("valor-2").value);
  const operador = document.getElementById("operador").value;

  if (isNaN(valor1) || isNaN(valor2)) {
    Swal.fire("Por favor, insira valores numéricos");
    return;
  }

  let resultado = 0;
  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      resultado = valor1 / valor2;
      break;
  }
  
  Swal.fire(`${valor1} ${operador} ${valor2} = ${resultado}`);
});
