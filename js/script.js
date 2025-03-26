const contadorMenos = document.getElementById("contador-menos");
const contadorMais = document.getElementById("contador-mais");
const contador = document.getElementById("contador");

contadorMais.addEventListener("click", () => {
  contador.innerHTML = parseInt(contador.innerHTML) + 1;
});
contadorMenos.addEventListener("click", () => {
    contador.innerHTML = parseInt(contador.innerHTML) -1;
});