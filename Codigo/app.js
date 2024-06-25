//Cálculo de Aspecto

    function calcularAspecto(valor1, valor2, valor3) {
        let Resultado = (valor1 * valor2) / valor3
        return Resultado
    }
    //Valores

        let valor1 = parseFloat(prompt("Qual a medida do material?"));
        let valor2 = parseFloat(prompt("Qual a altura desejada?"));
        let valor3 = parseFloat(prompt("Qual a largura desejada?"));
    
    //Chamei o cálculo

        let valorFinal = calcularAspecto(valor1, valor2, valor3); 

    // Obter os 4 primeiros dígitos do resultado
        let valorFinalString = valorFinal.toString();
        let valorFinalQuatroDigitos = valorFinalString.substring(0, 4);

        alert(`A resolução convertida para celular é ${valorFinalQuatroDigitos}`);