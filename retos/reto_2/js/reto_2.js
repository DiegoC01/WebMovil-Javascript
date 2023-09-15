alert("Este pequeñito programa calculará el promedio de 3 notas");

let nota1 = prompt("Ingresa tu primera nota:", '');
let nota2 = prompt("Ingresa tu segunda nota:", '');
let nota3 = prompt("Ingresa tu tercera nota:", '');
    

nota1 = Number(nota1) * 0.4;
nota2 = Number(nota2) * 0.3;
nota3 = Number(nota3) * 0.3;

promedio_ponderado = nota1 + nota2 + nota3;

alert(`Tu nota es ${promedio_ponderado}`);

