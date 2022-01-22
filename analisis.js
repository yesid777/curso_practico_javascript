// FUNCIONES HELPERS

//valida si un numero o la longitud de una arreglo es par o no (cero par , diferente impar)
function esPar (numero) {
    return (numero %2 === 0);
}


//Funcion que calcula la mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = (personaMitad1 + personaMitad2)/2
        return mediana;

    }else{

        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//crea un nuevo arreglo solo con los salarios.
const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

//realizauna ordenacion de menor a mayor ASC
const salariosColOrden = salariosCol.sort(
    function (salaryA,salaryB){
        return salaryA - salaryB;
    }
);


//MEDIANA DEL TOP 10%
const spliceStart = parseInt(salariosColOrden.length * 0.7);// el 70%
const spliceCount = salariosColOrden.length - spliceStart; // el cien por ciento menos e 10%


const salariosTop10Col = salariosColOrden.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosTop10Col);


const medianaGeneralCol = medianaSalarios(salariosColOrden);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
