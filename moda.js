//CALCULAR MODAS

function CalModa(cantidad,lista1){
    const lista1Count={}

    lista1.map(
        function (elemento) {
            if (lista1Count[elemento]){
                lista1Count[elemento] +=1;
            }else{
                lista1Count[elemento] = 1;
            }
            
        }
    )
    console.log("lista1Count CalModa " + lista1Count)

    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    
    )
    console.log("lista1Array CalModa " + lista1Array)
    
    
    return lista1Array[cantidad-1];
}





function ingresarValores(cantidad){
    const lista =[];
    const cantidad1 = cantidad;
    for (let i=0; i<cantidad; i++) {
        x=parseInt(prompt("Ingresa el sueldo numero : " + i));
        lista.push(x);
        console.log("lista ingresarValores " + lista)
    }
    
    //listaAsc= lista.sort();
    console.log("lista  ingresarValores " + lista)

    const moda = CalModa(cantidad1,lista);
    console.log("moda ingresarValores " + moda)
    return moda;
}



function calculo() {
    const InputCantidad = document.getElementById('InputCantidad')

    valueCantidad = InputCantidad.value;
    
    const moda = ingresarValores(valueCantidad)
    console.log("moda calculo " + moda)

    const ResultadoP = document.getElementById('ResultadoP');
    ResultadoP.innerText = "la Moda de los " + valueCantidad+" sueldos ingresados es : $" + moda + " veces repetido";
}




