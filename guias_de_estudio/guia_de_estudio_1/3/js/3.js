let contrasena = prompt("Ingrese una contraseña: ", '');

let numero_minimo_caracteres = 8;
let mayusculas = "QWERTYUIOPASDFGHJKLÑZXCVBNM".split('');
let numeros = "0123456789".split('');
let caracteres_especiales = "!@#$%^&*()_+{}[]:;<>,.?~\-".split('');

let primera_condicion = false;
let segunda_condicion = false;
let tercera_condicion = false;
let cuarta_condicion = false;

// Se corrobora si la contraseña ingresada cumple con la primera condición
if(contrasena.length > numero_minimo_caracteres){
    primera_condicion = true;
}

// Se corrobora si la contraseña ingresada cumple con la segunda condición
let i = 0;
while(i < contrasena.length){
    if(mayusculas.includes(contrasena[i])){
        segunda_condicion = true;
        break;
    }
    i++;
}

// Se corrobora si la contraseña ingresada cumple con la tercera condición
i = 0;
while(i < contrasena.length){
    if(numeros.includes(contrasena[i])){
        tercera_condicion = true;
        break;
    }
    i++;
}

// Se corrobora si la contraseña ingresada cumple con la cuarta condición
i = 0;
while(i < contrasena.length){
    if(caracteres_especiales.includes(contrasena[i])){
        cuarta_condicion = true;
        break;
    }
    i++;
}

// Se muestran los mensajes acorde al cumplimiento de las condiciones establecidas
if(primera_condicion && segunda_condicion && tercera_condicion && cuarta_condicion){
   alert("La contraseña es válida."); 
}
else{
    alert("La contraseña no cumple con los requisitos de seguridad.");
}