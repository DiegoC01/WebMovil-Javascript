let oracion = prompt("Ingrese una oración: ", '');

let contador_palabras = 0;
let i = 0;
while(i < oracion.length){
    if(oracion[i] != " "){
        if(i == (oracion.length - 1)){
            contador_palabras++;
        }
        else if(oracion[i + 1] == " "){
            contador_palabras++;
        }
    }
    i++;
}

alert(`La oración "${oracion}" tiene ${contador_palabras} palabras.`)
