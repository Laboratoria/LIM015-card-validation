import validator from "./validator.js";
//console.log();

//Le asignamos a la variable let validarBoton el método de selección getElementById                                              
let validarBoton = document.getElementById("btn");
validarBoton.addEventListener("click", () => {

    let inputNumero = document.getElementById("cardnumber").value;

    //para que el string ingresado solo contenga numeros, usamos la expresion regular regex
    const regex = /^[0-9]*$/;
    //La función test de una regex aplica a un string(inputnumero) y devuelve true o false
    if (inputNumero.length >= 12 && regex.test(inputNumero)) {
        let tarjetaValida = validator.isValid(inputNumero);
        if (tarjetaValida == true) {
            let tarjetaMaskify = validator.maskify(inputNumero);
            alert(`la tarjeta: ${tarjetaMaskify} es válida`);
            document.getElementById("cardnumber").value = "";
            document.getElementById("cvv").value = "";
        } else {
            alert("tarjeta inválida, intente nuevamente");
            document.getElementById("cardnumber").value = "";
            document.getElementById("cvv").value = "";
        }
    } else {
        alert("el número de su tarjeta debe tener min 12 digitos númericos");
    }
});