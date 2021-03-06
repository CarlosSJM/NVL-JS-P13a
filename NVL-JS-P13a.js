
/*Realiza una función, que será invocada desde el ámbito global, para calcular los n primeros números primos.
Recordamos que un número primo, únicamente es divisible por sí mismo y por la unidad.
Esa “n” que indica la cantidad de números a calcular es el parámetro de la función.*/

//plantemos variables
var n = 300;
var x = 2;
var primos = [];
//for para añadir numeros primos al array primos mediante la funcion "primo"
for(x;x<n; x++){

  if(primo(x)){
    primos.push(x);
  };
};

console.log(primos);

function primo(numero) {
  for (var i=2; i < numero; i++){
    //"i" se inicializa en 2 ya que en numero primo solo es divisible por 1 y el mismo
    if(numero%i===0){//con este if nos cercioramos que si el el resto del cociente es 0, seria divisible, no seria primo
      return false;
    };
  };
  return numero !==1;
}

/*En base al concepto de los numeros primos; diseñe una funcion que discriminara entre numeros primos y no primos.

Llame a la funcion con un For con el cual me iria añadiendo numeros primos devueltos por la funcion a un array llamados primos.
finalmente mediante console.log(primos), represente el array en la consola.*/
