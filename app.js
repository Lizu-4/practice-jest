
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yenes
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return Math.round(valueInYen);
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a libras
    let valueInPound = valueInYen * 0.8;
    // retornamos el valor
    return Math.round(valueInPound);
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}
