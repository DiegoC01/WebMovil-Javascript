let numeros = prompt("Ingrese una lista de números separados por comas: ", '');

array_numeros = numeros.split(",");

let i = 1;
let numero_mayor = Number(array_numeros[i - 1]);
while(i <= array_numeros.length){
    if(Number(array_numeros[i]) > numero_mayor){
        numero_mayor = array_numeros[i];
    }
    i++;
}

alert(`El número ${numero_mayor} es el número mayor dentro del conjunto.`);
