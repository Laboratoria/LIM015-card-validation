import validator from './validator.js';
const leftSlider = document.getElementById('leftSlider');
const correct = document.getElementById('correct');

const btnValidate = document.getElementById('btnValidate');
const btnRegresar = document.getElementById('btnRegresar');
const right = document.getElementById('right');

btnValidate.addEventListener("click",(validacion) =>{ //Se trae al ID btnValidate y se le agreaga un evento que cuando haga click me traiga el valor ingresado
//input numero de tarjeta
const creditCardNumber = document.getElementById("numberEntered").value;
//INGRESO VACIO
let resultadoFinal = validator.isValid(creditCardNumber);
const textAlert = document.getElementById("textAlert");

if( creditCardNumber === ''){
    validacion.preventDefault();
    textAlert.classList.remove('hidden');
    textAlert.innerHTML='Llenar este campo';
}else{
    leftSlider.classList.remove('hidden');
    right.classList.remove('hidden');
    correct.classList.add('hidden');

    if(resultadoFinal === true){
        right.classList.add('hidden');
        leftSlider.classList.add('show');
        btnRegresar.classList.remove("hidden");
    }else{
       /*  document.getElementById("emoticon").src='img/cerca.png'; */
       leftSlider.classList.remove("hidden");
        right.classList.add("hidden");
        btnRegresar.classList.remove("hidden");
    }
}

/* console.log(CardNumber); */ //coge el valor introducido
const validador = validator.isValid(creditCardNumber);//isValid -- nombre de obj 
/* console.log(validador); */

/* ------------------------------------------------------------------- */
const maskify = validator.maskify(creditCardNumber);

if(validador == true){
    document.getElementById("michi").innerHTML="Tarjeta " + maskify + "  es valida sigue VIGENTE";
    document.getElementById("emoticon").src='img/cheque.png';
}else{
    document.getElementById("michi").innerHTML="Tarjeta " + maskify + "  incorrecto ya CADUCO";
    document.getElementById("emoticon").src='img/cerca.png';
}

btnRegresar.addEventListener('click',()=>{
    right.classList.add('show');
    leftSlider.classList.remove('show');
    document.location.reload();
})

const getIssuer = validator.getIssuer(creditCardNumber);

const americanExpress = document.getElementById('imgAmericanExpress');
const imgJCB = document.getElementById('imgJCB');
const imgVisa = document.getElementById('imgVisa');
const imgMasterCard = document.getElementById('imgMasterCard');
const imgDiscover = document.getElementById('imgDiscover');

if(getIssuer == "American Express" && validador == true){
    americanExpress.classList.remove('hiddenCard');
}
if(getIssuer == "JCB" && validador == true){
    imgJCB.classList.remove('hiddenCard');
}
if(getIssuer == "Visa" && validador == true){
    imgVisa.classList.remove('hiddenCard');
}
if(getIssuer == "MasterCard" && validador == true){
    imgMasterCard.classList.remove('hiddenCard');
}
if(getIssuer == "Discover" && validador == true){
    imgDiscover.classList.remove('hiddenCard');
}


});



