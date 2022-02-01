//4) Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720

const array1= [1, 2, 3, 4];
const x2 = array1. reduce ((ac, va) =>{
    return ac + va;
})
// 1+2+3+4
console.log(x2);
matrizRed = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];

//matrizred=[1,2,3,4,5,6]
function multiplicaMatriz (array) {
    return array.reduce ((ac, va) =>{
      return ac.concat(va);
    }). reduce((ac, va) => {
        return (ac* va);
    });
}

console.log ("matriz Original : ", matrizRed)
console.log (multiplicaMatriz(matrizRed));

//se tiene un vector con los siguientes elementos
// input = [30, 48, 11,5, 32]
//se pide diseñar la funcion que devuelva la siguiente cadena:
//tus numeros de la suerte son: 30,48,11,5 y 32
// use la funcion reduce

const arrayNumeros = [30, 48, 11,5, 32];
function numerosDeLaSuerte (array){
    const cad = "Tus numeros de la suerte son: ";
    return cad + array.reduce ((ac, va, index, array) =>{
        var aux = index < ( array.length -1)? " , ": ", y ";
        return (ac) + aux + (va);

    });
}

console.log (numerosDeLaSuerte(arrayNumeros)); 

// verificar si uno de los elementos del array es mayor a 10
const goodInput = [8,9,12,6,7];
function numerosMayorq10(array){
    return array.some(data => {
        return data > 10;
    })
}
console.log("¿Los numeros son mayor a 10?: ", numerosMayorq10(goodInput));

//1) Verificar si una de las cadenas de caracteres del array

//tiene más de 10 caracteres

const vectorCadenas = ["Ecuador", "Argentina", "Dinamarca","Coreal del Norte"];
const cadenaSeparaa= vectorCadenas.forEach(item =>{
    console.log(item);
    
})
const palabras= vectorCadenas.some(data => {
    return data > 10;
})
//console.log("¿Los numeros son mayor a 10?: ", palabras);

//2) Chequear si uno de los elementos de la matriz es true

const vectorBooleano = [

    [false, false, false],

    [false, false, false],

    [false, false, true]

  ];
  if(vectorBooleano.includes(True)){
    console.log("True esta presente");
  }else{
    console.log("True no encontrado");
  }


//3) verificar si la palabra 'Lost' existe dentro del siguiente array:

var vectorParrafo = ["Strange is the night where black stars rise,","Lost", "And strange moons circle through the skies,",
  "But stranger Lost still is","Lost Carcosa."
  ];
if(vectorParrafo.includes("Lost")){
  console.log("La palabra Lost esta presente");
}else{
  console.log("La palabra Lost no encontrada");
}