//CALCULAR MEDIANA

function CalMediana(cantidad,lista){
    
    const par = cantidad % 2;
    const mitad = (cantidad / 2);
    const mitadImp = Math.trunc(mitad);
    console.log("par CalMediana " + par)
    console.log("mitad CalMediana " + mitad)
    console.log("mitadImp CalMediana " + mitadImp)


    if(par!=0){
        mediana = lista[mitadImp];
        console.log("mediana CalMediana " + mediana)
    }else{
        entero = Math.trunc(mitad)
        console.log("entero CalMediana " + entero)
        console.log("entero CalMediana " + lista[entero] + " "+ lista[entero-1])

        mediana = (lista[entero] + (lista[entero-1]))/2
        console.log("mediana CalMediana" + mediana)
    }

    return mediana;

}

function ingresarValores(cantidad){
    const lista =[];
    for (let i=0; i<cantidad; i++) {
        x=parseInt(prompt("Ingresa el sueldo numero : " + i));
        lista.push(x);
        console.log("lista ingresarValores" + lista)
    }
    
    listaAsc= lista.sort();
    console.log("listaAsc ingresarValores" + listaAsc)

    const mediana = CalMediana(cantidad,listaAsc);
    console.log("mediana ingresarValores" + mediana)
    return mediana;
}



function calculo() {
    const InputCantidad = document.getElementById('InputCantidad')

    valueCantidad = InputCantidad.value;
    
    const mediana = ingresarValores(valueCantidad)
    console.log("mediana calculo" + mediana)

    const ResultadoP = document.getElementById('ResultadoP');
    ResultadoP.innerText = "la Mediana de los " + valueCantidad+" sueldos ingresados es : $" + mediana + " pesos";
}




