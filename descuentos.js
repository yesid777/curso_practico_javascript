

function calcularDescuento(precio,descuento) {
    valorpagar= precio * ((100 - descuento)/100)
    return valorpagar;
}

function calcularPrecioConDescuento(){
    const inputPrecio = document.getElementById('inputPrecio')
    const inputDescuento = document.getElementById('inputDescuento')

    valuePrecio = inputPrecio.value;
    valueDescuento= inputDescuento.value;

    valorPagar= calcularDescuento(valuePrecio,valueDescuento);

    const ResultadoP = document.getElementById('ResultadoP');
    ResultadoP.innerText = "El precio a pagar con Descuento es : $" + valorPagar + " pesos";
}

