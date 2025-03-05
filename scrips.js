const imputext = document.querySelector(".imputext");
const botones = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


//Definir función para calcular según el botón presionado.
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // Si la salida tiene '%', reemplazar con '/100' antes de evaluar.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "DEL") {
        // Si se hace clic en el botón DEL, eliminar el último carácter de la salida.
        output = output.toString().slice(0, -1);
    } else {
        // Si la salida está vacía y el botón es un carácter especial, entonces retornar.
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    imputext.value = output;
};

//añado eventos para calcular en el input con click//
botones.forEach(button => {
    button.addEventListener("click", e => calculate(e.target.dataset.value))
});

//funciom para el boton de reset// 
