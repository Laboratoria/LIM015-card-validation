const validator = {
    isValid: function(crediCard) {
        //revertir el array con el uso de split y reverse
        let arreglo = crediCard.split('').reverse().map(Number); //Number convierte un string u otro valor a uno de tipo numérico
        //console.log(arreglo);
        //multiplicamos las posiciones pares x2
        arreglo = arreglo.map((num, i) => {
            if (i % 2 == 1) { //multiplicamos la posicion i % 2  y nos devuleve la posicion par, *2 (en arreglo la posicion empieza desde 0)
                return num * 2
            } else {
                return num;
            }
        });
        //console.log(arreglo);
        //sumamos los numeros  >= 10 y le restamos nueve 
        arreglo = arreglo.map((num) => {
            if (num >= 10) {
                return num -= 9;
            } else {
                return num
            }
        });
        //el método reduce me devolverá la suma total de los digitos del arreglo
        const numero = arreglo.reduce((acumulator, currentvalue) => {
            return acumulator + currentvalue;
        });
        if (numero % 10 == 0) { //a la suma lo %10 y si es exacto, es true, sino false
            return true;
        } else {
            return false;
        }
        //console.log(numero);  
    },
    maskify(numero) {
        //aplicamos el metodo array from, nos permite crear una nueva instancia de array 
        let arreglo = Array.from(numero);
        for (let i = 0; i < arreglo.length - 4; i++) {
            arreglo[i] = '#';
        }
        return (arreglo.join('')); //método join, une todos los elementos del array y los devuelve
    }
};

export default validator;