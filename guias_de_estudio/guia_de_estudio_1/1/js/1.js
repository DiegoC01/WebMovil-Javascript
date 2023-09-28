let numero = prompt("Ingrese un número entero positivo: ", '');

if(numero > 0){
    let suma_par = 0;
    let i =  1;
    while(i <= numero){
        if(i % 2 == 0){
            suma_par = suma_par + i;
        }
        i++;
    }

    alert(`La suma de los valores pares entre 1 y ${numero} es igual a ${suma_par}`);
}
else if(numero <= 0){
    alert("El número ingresado no es positivo");
}
else{
    alert("No se ha ingresado un número");
}