alert("Bienvenido al cotizador de juegos online");
let carritoFinal = 0;
let pregunta = "";
const precioJuego = parseInt(
  prompt("Digite el precio en pesos argentinos del juego que desea comprar: ")
);

function calculoImpuestos(gcias, bsPers, PAIS) {
  return gcias + bsPers + PAIS;
}
const impuestos = calculoImpuestos(0.3, 0.15, 0.3);

carritoFinal = precioJuego + impuestos * precioJuego;
console.log("El valor de su juego es de: $" + carritoFinal);

pregunta = prompt("¿Desea añadir otro juego?");

while (pregunta === "si" || pregunta === "Si" || pregunta === "SI") {
  let precioNuevo = parseInt(prompt("Digite el precio del nuevo juego: "));

  let precioConImpuestos = precioNuevo * impuestos;

  let precioNuevoConImpuestos = precioConImpuestos + precioNuevo;

  carritoFinal = carritoFinal + precioNuevoConImpuestos;

  console.log("El valor de su nuevo juego es: $" + precioNuevoConImpuestos);

  console.log("El total a pagar es de: $" + carritoFinal);

  pregunta = prompt("¿Desea añadir otro juego?");
}

alert("¡Muchas Gracias!");