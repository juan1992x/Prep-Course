// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

const { stringify } = require("git-url-parse");

// Crea una variable "string", puede contener lo que quieras:
const nombre = "juan";

// Crea una variable numérica, puede ser cualquier número:
const num = 69;

// Crea una variable booleana:
const nuevoBool = nombre <num;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 4.2;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var str ="Return"
  
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var x
  var y 

  suma=x+y
  
  alert("la suma es:" +suma)
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var x
  var y
  resta = x-y
  alert("la resta es:"+resta)
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var x
  var y
  multiplica= x*y

  alert("la multiplicacion es:"+multiplica)

}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var x
var y
divide = x/y

alert("la division es:"+divide)
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
  var x=null
  var y=null

  if(x=y){
    alert("true");
  
  }else{alert("false")
  }
}


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  str1 = ("");
  str2 = ("");

  if (str1.equals(str2)) {
alert("true");
}else{
  alert("false")

}





}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var num
  if(num<=90){
alert("true");
  }else{
    alert("false");
}
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var num
  if(num>=50){
    alert("true")

  }else{
    alert("false")
}
}
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var x
  var y
  divide = x / y
  resultado = divide
  alert(" el resto de la division es:"+divide);

}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
  var  num

  num=prompt("numero");
  if(num /2 ==0 ){
alert("numero" + "true"+ num)

    }else{
    alert("numero" + "false"+ num);
    }

}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var  num

  num=prompt("numero");
  if(num /2 ==0 ){
alert("numero" + "true"+ num)

    }else{
    alert("numero" + "false"+ num);
    }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
 var  resultado =1 ;

  for(var i=0; i<esponente; i++){
resultado *=num;

  }
  return resultado;
  alert("valor:"+elevarAlCuadrado(8*2) );
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var  resultado =1 ;

  for(var i=0; i<esponente; i++){
resultado *=num;

  }
  return resultado;
  alert("valor:"+elevarAlCubo(2*3) );
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var resultado=1;
  for(var i=0; i<exponent; i++){
resultado *=num;

  }
return resultado;

}
alert(elevar(2,3));
function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var num;
  alert(Math.round(num));
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
 var num =0;
 redondearHaciaArriba=Math.ceil(num);
 alert("redondeo al proximo entero:"+redondearHaciaArriba);

  
}


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var numeroRandom=Math.random;
 
  alert("los numeros son:"+numeroRandom);

}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var numero=parseInt(prompt("ingresar numero"));

  if(numero>0){
    alert("Es positivo");
    
  }else{
    alert("negativo");
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
var agregarSimboloExclamacion=prompt("ingresar la palabra"+"!")
}



function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombre=prompt("ingresa tu nombre");
  var apellido=prompt("ingresa tu apellido");

  var combinarNombres=nombre  +  apellido
  alert("la respuesta es"   +combinarNombres);

}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var obtenerSaludo=prompt("ingresa tu nombre");

alert("Hola"+obtenerSaludo);

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
  var base=parseInt(promt("ingresa la base"));
  var altura=parseInt(prompt("ingresa la altura"));
  
  var area

  area=base*altura

  alert("el area del rectangulo es:"+area) ;

}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
var l1=prompt("ingrese primer lado");
var l2=prompt("ingrese segundo lado");
var l3=prompt("ingrese tercer lado");
var l4=prompt("ingrese cuarto lado");

retornarPerimetro=l1+l2+l3+l4
alert("el resultado del perimetro es"+retornarPerimetro)

  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
var base=prompt("ingresa la base");
var altura=prompt("ingresa la altura");

areaDelTriangulo=base*altura/2

alert("el area del triangulo es"+areaDelTriangulo);


}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
  var euro=parseInt(prompt("ingrese la cantidad a calcular:"));

  deEuroAdolar=euro*1.20

  alert("la cantidad en dolares es:"+deEuroAdolar);

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
  var letra =prompt("ingresar palabra o letra");
  
  if (letra = "a"&"e"&"i"&"o"&"u"){ 
alert("es vocal"+letra);

  }
  
  else{
    alert("dato incorrecto")

    
  }
  if(letra>1){
    alert("dato incorrecto");
    
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
