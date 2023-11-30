document.getElementById("calcular").addEventListener("click", () =>{
  const valor1 = document.getElementById("valor-1").value;
  const valor2 = document.getElementById("valor-2").value;
  const operador = document.getElementById("operador").value;
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
