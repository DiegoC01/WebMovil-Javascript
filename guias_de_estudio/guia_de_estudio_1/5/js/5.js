alert("Calculadora de IMC");
let peso = prompt("Ingrese su peso (en kilos): ", '');
let estatura = prompt("Ingrese su estatura (en metros): ", '');

let imc = peso / (estatura * estatura);

if(imc < 18.5){
    alert(`Su IMC es: ${imc.toFixed(2)}. Estado: Bajo Peso`);
}
else if(imc >= 18.5 && imc <= 24.9){
    alert(`Su IMC es: ${imc.toFixed(2)}. Estado: Normal`);
}
else if(imc > 24.9){
    alert(`Su IMC es: ${imc.toFixed(2)}. Estado: Sobrepeso`);
}
else{
    alert("Error de cálculo. Asegurese de que los valores ingresados sean correctos.");
}