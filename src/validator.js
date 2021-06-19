const validator = {
    isValid: function(crediCard) {
        let arreglo = crediCard.split('').reverse().map(Number);
        //console.log(arreglo);
        //multiplicamos las posiciones pares x2
        arreglo = arreglo.map((num, i) => {
            if (i % 2 == 1) {
                return num * 2
            } else {
                return num;
            }
        });
        //console.log(arreglo);
        //sumamos los numeros mayores a 10
        arreglo = arreglo.map((num) => {
            if (num >= 10) {
                return num -= 9;
            } else {
                return num
            }
        });
        //los digitos totales del arreglo con el método reduce que me devolverá la suma total 
        const numero = arreglo.reduce((acumulator, currentvalue) => {
            return acumulator + currentvalue;
        });
        if (numero % 10 == 0) {
            return true;
        } else {
            return false;
        }
        //console.log(numero);  
    },
    maskify(numero) {
        let arreglo = Array.from(numero);
        for (let i = 0; i < arreglo.length - 4; i++) {
            arreglo[i] = '#';
        }
        return (arreglo.join(''));
    }
};

export default validator;