const numeroMagico = Math.floor(Math.random() * 10) + 1;

const btnComenzar = document.getElementById("btn-comenzar");
const inputSection = document.getElementById("input-section");
const inputNumero = document.getElementById("input-numero");
const btnEnviar = document.getElementById("btn-enviar");

btnComenzar.addEventListener("click", () => {
    inputSection.classList.remove("d-none");
    btnComenzar.classList.add("d-none");
});

btnEnviar.addEventListener("click", () => {
    const numeroIngresado = Number(inputNumero.value);
    if (numeroIngresado === numeroMagico) {
        alert("¡Felicitaciones! Adivinaste el número.");
    } else if (numeroIngresado < numeroMagico) {
        alert("El número ingresado es menor al número mágico. Ingresa un número mayor.");
    } else {
        alert("El número ingresado es mayor al número mágico. Ingresa un número menor.");
    }
});
