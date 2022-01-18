//CALCULAR PROMEDIO

let suma= 0;

function Promedio(suma,cantidad){
    
    const promedio = suma/cantidad;

    return promedio;

}

function ingresarValores(cantidad){
    const lista =[];
    for (let i=0; i<cantidad; i++) {
        x=parseInt(prompt("hola: " + i));
        lista.push(x);
        suma=suma+ lista[i];
    }
    
    const prom =Promedio(suma,cantidad);
    return prom;
}


function calculo() {
    const InputCantidad = document.getElementById('InputCantidad')

    valueCantidad = InputCantidad.value;
    
    const promedio = ingresarValores(valueCantidad)

    const ResultadoP = document.getElementById('ResultadoP');
    ResultadoP.innerText = "El promedio de los " + valueCantidad+" sueldos ingresados es : $" + promedio + " pesos";
}

