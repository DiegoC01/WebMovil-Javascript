function calcularIMC(){
    // Se obtienen las variables ingresadas en el formulario.
    let nombre = document.getElementById("ingreso_nombre").value;
    let peso = document.getElementById("ingreso_peso").value;
    let altura = document.getElementById("ingreso_altura").value;
    let edad = document.getElementById("ingreso_edad").value;
    let genero = document.getElementById("ingreso_genero").value;
    let factor_actividad_fisica = document.getElementById("ingreso_actividad_fisica").value;

    // Se definen las variables a calcular.
    let imc;
    let clasificacion_imc;
    let gasto_energetico_diario;
    let estado_nutricional;

    // Calculo de IMC y clasificación acorde a este.
    imc = (peso / ((altura / 100) * (altura / 100)));

    if(imc < 18.5){
        clasificacion_imc = "Bajo peso";
        estado_nutricional = "Necesitas atención especializada.";
    }
    else if(imc >= 18.5 && imc <= 24.9){
        clasificacion_imc = "Peso normal";
        estado_nutricional = "Estás bien. Sigue así.";
    }
    else if(imc > 24.9){
        clasificacion_imc = "Sobrepeso";
        estado_nutricional = "Necesitas atención especializada.";
    }
    else if(imc > 29.9){
        clasificacion_imc = "Obesidad";
        estado_nutricional = "Necesitas mucha atención especializada.";
    }
    else{
        alert("Error de cálculo. Asegurese de que los valores ingresados sean correctos.");
    }

    // Cálculo Gasto Energético Diario (GED)
    gasto_energetico_diario = (Number(peso) * Number(factor_actividad_fisica));

    // Mostrando mensajes en la página
    document.getElementById("titulo_resultados").innerHTML = `Resultados para ${nombre}`;
    document.getElementById("mostrar_imc").innerHTML = `IMC: ${imc.toFixed(2)}`;
    document.getElementById("mostrar_clasificacion_imc").innerHTML = `Clasificación: ${clasificacion_imc}`;
    document.getElementById("mostrar_gasto_energetico_diario").innerHTML = `Gasto Energético Diario: ${gasto_energetico_diario.toFixed(2)} kcal`;
    document.getElementById("mostrar_estado_nutricional").innerHTML = `Estado Nutricional: ${estado_nutricional}`;
}