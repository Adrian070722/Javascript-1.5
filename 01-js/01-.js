
// Función para obtener el mayor de dos números o indicar si son iguales
function encontrarMayor(numero1, numero2) {
  if (numero1 > numero2) {
    return `El primer número (${numero1}) es mayor que el segundo (${numero2})`;
  } else if (numero1 === numero2) {
    return `¡Los dos números son iguales! (${numero1} = ${numero2})`;
  } else {
    return `El segundo número (${numero2}) es mayor que el primero (${numero1})`;
  }
}

// Solicitar números al usuario
const numero1 = parseFloat(prompt("Ingrese el primer número: "));
const numero2 = parseFloat(prompt("Ingrese el segundo número: "));

// Encontrar el mayor
const resultado = encontrarMayor(numero1, numero2);

// Mostrar el resultado
console.log(resultado);