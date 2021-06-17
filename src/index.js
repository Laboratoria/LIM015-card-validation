import validator from './validator.js';
//console.log();

let validarBoton = document.getElementById("btn");
validarBoton.addEventListener("click", () => {
    let inputNumero = document.getElementById("cardnumber");
    let numero = inputNumero.value;
    const regex = /^[0-9]*$/;
    if (numero.length >= 12 && regex.test(numero)){
        let tarjetaValida = validator.isValid(numero);
        if (tarjetaValida == true){
        let tarjetaMaskify = validator.maskify(numero);
        alert(`la tarjeta: ${tarjetaMaskify} es válida`);
        document.getElementById("cardnumber").value ="";
        document.getElementById("cvv").value ="";
        } else {
        alert("tarjeta inválida, intente nuevamente");
        document.getElementById("cardnumber").value ="";
        document.getElementById("cvv").value ="";
        }

    } else {
        alert("el número de su tarjeta debe tener min 12 digitos númericos")
    }
    
});
