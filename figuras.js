
// Este es el codigo del cuadrado
console.group("CUADRADO")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimero del cuadrado es: " + perimetroCuadrado + " cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();



// Este es codigo de un triágulo
console.group("TRIAGULO");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " 
  + ladoTriangulo1 
  + " cm, " 
  + ladoTriangulo2 
  + " cm, " 
  + baseTriangulo + " cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("Perimetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + " cm2");
console.groupEnd();

// Este es el codigo del circulo
console.group("CIRCULO");

const radio = 4;
const pi = Math.PI;

console.log("El radio del circulo es: " + radio + " cm");

const perimetroCirculo = Math.round(2 * pi * radio);
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

const areaCirculo = Math.round(pi * radio * radio);
console.log("El área del circulo es: " + areaCirculo + " cm2");  
console.groupEnd();
