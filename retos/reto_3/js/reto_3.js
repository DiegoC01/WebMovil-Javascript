function calcularPropina(){
    // Obteniendo valores ingresados por el usuario
    let total_boleta = document.getElementById("total_boleta").value;
    let porcentaje_propina = document.getElementById("porcentaje_propina").value / 100;

    // Calculando propina
    let propina = total_boleta * porcentaje_propina;

    // Mostrando propina y total final boleta en la página
    document.getElementById("mostrar_propina").innerHTML = `Propina: $${propina.toFixed(2)} CLP`;
    let total_boleta_final = Number(propina) + Number(total_boleta);
    document.getElementById("mostrar_total_boleta_final").innerHTML = `Total a pagar: $${total_boleta_final.toFixed(2)} CLP`;

}