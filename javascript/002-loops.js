var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

// Retorna la suma de los números que son estrictamente mayores que 18
function greaterThan18(elements) {

  // Escriviu aquí el vostre codi:
  var total = 0;
  for (i = 0; i < elements.length; i++) {
    // Instrucciones
    if (elements[i] > 18) {
      total = total + elements[i];
    }
}

  return total;
}

document.getElementById("A").innerHTML = greaterThan18(elements);

function greaterThan18dd(elements) {

  var totalPar = 0;
    for (i = 0; i < elements.length; i++) {
    // Instrucciones
    if (elements[i] > 18 && ( elements[i] % 2) == 0) {
      totalPar = totalPar + elements[i];
    }
  }
  // Escriviu aquí el vostre codi:
  return totalPar;

}

document.getElementById("B").innerHTML = greaterThan18dd(elements);

// Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares y que se encuentran en posiciones impares del vector
function greaterThan18OddEvenPositions(elements) {
  var totalImpar = 0;
  for (i = 0; i < elements.length; i++) {
  // Instrucciones
  if (elements[i] > 18 && ((i % 2) == 1) && ( elements[i] % 2) == 0) {
    totalImpar = totalImpar + elements[i];
  }
}
  // Escriviu aquí el vostre codi:
  return totalImpar;
}


document.getElementById("C").innerHTML = greaterThan18OddEvenPositions(elements);
