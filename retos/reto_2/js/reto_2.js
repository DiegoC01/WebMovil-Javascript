alert("Este pequeñito programa calculará el promedio de 3 notas");

let nota1 = prompt("Ingresa tu primera nota:", '') * 0.4;
let nota2 = prompt("Ingresa tu segunda nota:", '') * 0.3;
let nota3 = prompt("Ingresa tu tercera nota:", '') * 0.3;

if (false) {
    alert("Haz ingresado un caracter no valido para calcular tu promedio.");
}
else {
    promedio_ponderado = nota1 + nota2 + nota3;

    alert(`Tu nota es ${promedio_ponderado}`);
    
    if (promedio_ponderado < 3.95) {
        alert("Has reprobado la asignatura :(");
    } 
    else if (promedio_ponderado >= 3.95 && promedio_ponderado <= 4.94) {
        alert("Vas a examen :|");
    }
    else if (promedio_ponderado >= 4.95) {
        alert("Eximiste la asignatura :)!")
    }    
}