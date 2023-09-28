// Concatenación con binario +
console.log('Concatenación con binario "+"');
console.log('1' + 2); // Resultado: 12
console.log(2 + '1'); // Resultado: 21
console.log(1 + 1 + '2'); // Resultado: 22
console.log('2' + 1 + 1); // Resultado: 211
// Va de izquierda a derecha, pero el string tiene preferencia, se concatena al final


// Sin efecto en número
let manzana = 2;
console.log(+manzana); // No pasa nada

// Convierte los no-números
console.log(+true); // 1
console.log(+""); // 0
console.log(+"4"); // 4


console.log("Asiganaciones encadenadas");
let a, b, c;
a = b = c = 5 + 5;
console.log(a); // 10
console.log(b); // 10
console.log(c); // 10
