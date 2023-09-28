// Objeto que representa el inventario
let inventario = {};

// Se definen objetos vacío que representa cada producto.
let producto_1 = {};
let producto_2 = {};
let producto_3 = {};

// Se pide ingresa información para el producto 1
producto_1.nombre = prompt("Ingrese el nombre del primer producto: ", '');
producto_1.precio = prompt("Ingrese el precio del primer producto: ", '');
producto_1.stock = prompt("Ingrese el stock del primer producto: ", '');
inventario.producto_1 = producto_1;

// Se pide ingresa información para el producto 2
producto_2.nombre = prompt("Ingrese el nombre del segundo producto: ", '');
producto_2.precio = prompt("Ingrese el precio del segundo producto: ", '');
producto_2.stock = prompt("Ingrese el stock del segundo producto: ", '');
inventario.producto_2 = producto_2;

// Se pide ingresa información para el producto 1
producto_3.nombre = prompt("Ingrese el nombre del tercer producto: ", '');
producto_3.precio = prompt("Ingrese el precio del tercer producto: ", '');
producto_3.stock = prompt("Ingrese el stock del tercer producto: ", '');
inventario.producto_3 = producto_3;

// Mensaje para que se pueda corroborar en la consola los productos ingresados.
console.log("Los productos ingresados son: ");
console.log(inventario);

productos = Object.values(inventario);

let i = 0;
let sin_criticos = true;
while(i < productos.length){
    if(productos[i].stock < 1000){
        sin_criticos = false;
        alert(`El stock del producto ${productos[i].nombre} es crítico. Stock: ${productos[i].stock}`);
    }
    i++;
}

if(sin_criticos){
    alert("El inventario está en buen estado.");
}