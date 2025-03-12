const imputext = document.querySelector(".imputext");
const botones = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Función para evaluar la expresión
const calculate = (btnValue) => {
    // Evitar varios signos consecutivos
    if (specialChars.includes(btnValue)) {
        // Si ya hay un operador al final, no agregarlo
        if (specialChars.includes(output.slice(-1))) return;
    }

    if (btnValue === "=" && output !== "") {
        // Si la salida tiene '%', reemplazar con '/100' antes de evaluar.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "DEL") {
        // Eliminar el último carácter de la salida.
        output = output.slice(0, -1);
    } else if (btnValue === "RESET") {
        // Eliminar todo el contenido de la salida.
        output = "";
    } else {
        // Si la salida está vacía y el botón es un carácter especial, no hacer nada
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    imputext.value = output;
};

// Añadir eventos a los botones
botones.forEach(button => {
    button.addEventListener("click", e => calculate(e.target.dataset.value));
});

// Funcionalidad para el teclado
document.addEventListener("keydown", (e) => {
    const key = e.key;

    // Prevenir la acción por defecto de las teclas no deseadas (como el Backspace)
    if (key === "Backspace") {
        calculate("DEL");
    } else if (key === "Enter") {
        calculate("=");
    } else if ("0123456789".includes(key)) {
        calculate(key);
    } else if (["%", "*", "/", "-", "+", "."].includes(key)) {
        calculate(key);
    }
});
