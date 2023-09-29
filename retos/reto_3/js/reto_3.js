function calcularPropina(){
    let total_boleta = document.getElementById("total_boleta").value;
    let porcentaje_propina = document.getElementById("porcentaje_propina").value / 100;

    let propina = total_boleta * porcentaje_propina;

    document.getElementById("mostrar_propina").innerHTML = `Propina: $${propina} CLP`;

    let total_boleta_final = Number(propina) + Number(total_boleta);
    document.getElementById("mostrar_total_boleta_final").innerHTML = `Total a pagar: $${total_boleta_final} CLP`;

}