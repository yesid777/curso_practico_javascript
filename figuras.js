//Codigo del Cuadrado
console.group("Cuadrado");//Crea grupo de visualizacion en la consola

function perimetroCuadrado(lado){
    return lado*4;
}


function areaCuadrado(lado){
   return lado*lado;
}

console.groupEnd();//Cierra grupo de visualizacion en la consola


//Codigo del Triangulo

function perimetroTringulo(lado1,lado2,base){
    numLado1 =parseInt(lado1);
    numLado2 =parseInt(lado2);
    numBase =parseInt(base);
    perimetro= numLado1 + numLado2 + numBase;
    return perimetro;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

console.groupEnd();//Cierra grupo de visualizacion en la consola


//Codigo del Circulo
console.group("Circulo");//Crea grupo de visualizacion en la consola

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//Perimetro
function perimetroCirculo(radio){
    PI = Math.PI;
    diametro = diametroCirculo(radio);
    return diametro * PI;
} 

// Área
function areaCirculo(radio) {
    PI = Math.PI;
    return (radio * radio) * PI;
}


console.groupEnd();//Cierra grupo de visualizacion en la consola

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Aqui interactuamos con HTML
//CUADRADO
function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro= perimetroCuadrado(value);
 alert("El Perimetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area= areaCuadrado(value);
    alert("El area del cuadrado es: " + area + " cm");

}

//TRIANGULO
function calcularPerimetroTriangulo(){
    const Lado1 = document.getElementById("InputLado1");
    const Lado2 = document.getElementById("InputLado2");
    const Base = document.getElementById("InputBase");
    const valueLado1 = Lado1.value;
    const valueLado2 = Lado2.value;
    const valueBase = Base.value;
   
    const perimetro= perimetroTringulo(valueLado1,valueLado2,valueBase);
    alert("El perimetro del Triangulo es: "+ perimetro + "cm");
}

   
function calcularAreaTriangulo(){
    const Altura = document.getElementById("InputAltura");
    const Base = document.getElementById("InputBase");
    const valueBase = Base.value;
    const valueAltura = Altura.value;

    const area= areaTriangulo(valueBase,valueAltura);
    alert("El area del Triangulo es: " + area + " cm2")
}


//CIRCULO

function calcularPerimetroCirculo(){
    const Radio = document.getElementById("InputRadio");
    const valueRadio = Radio.value;
   
    const perimetro= perimetroCirculo(valueRadio);
    alert("El perimetro del Circulo es: "+ perimetro + "cm");
}

   
function calcularAreaCirculo(){
    const Radio = document.getElementById("InputRadio");
    const valueRadio = Radio.value;

    const area= areaCirculo(valueRadio);
    alert("El area del Circulo es: " + area + " cm2")
}

//TRIANGULO ISOSCELES

function calcularAlturaIsoceles(lado,base){
    return altura= Math.sqrt((lado * lado) - ((base * base) / 4))
}

function calcularAlturaI(){
    const LadoI1 = document.getElementById("InputLadoI1");
    const LadoI2 = document.getElementById("InputLadoI2");
    const LadoI3 = document.getElementById("InputLadoI3");
    const valueLado1 = LadoI1.value;
    const valueLado2 = LadoI2.value;
    const valueLado3 = LadoI3.value;
   
    if (valueLado1 == valueLado2 && valueLado3 == valueLado1){
        alert("El este Triangulo no es ISOSCELES ya que todos sus lados son iguales de: " + valueLado1 +"cm");
    }else if (valueLado1 == valueLado2){
       const altura= calcularAlturaIsoceles(valueLado1,valueLado3);
       alert("El Triangulo es ISOSCELES y su altura es: "+ altura + "cm");
       
    }else if (valueLado1 == valueLado3){
        const altura= calcularAlturaIsoceles(valueLado1,valueLado2);
        alert("El Triangulo es ISOSCELES y su altura es: "+ altura + "cm");
        
    }else if (valueLado2 == valueLado3){
        const altura= calcularAlturaIsoceles(valueLado2,valueLado1);
        alert("El Triangulo es ISOSCELES y su altura es: "+ altura + "cm");
        
    }else{
        alert("El este Triangulo no es ISOSCELES ya que no tiene 2 lados Iguales, ingresaste: " + valueLado1 +"cm, "+ valueLado2 + "cm y "+ valueLado3);
    }
    
}