const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '' ) {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso!';
        }else if (valorIMC < 25){
            classificacao = 'com o peso ideal. Parabéns!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau 1, CUIDADO!';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau 2, CUIDADO!!';
        }else {
            classificacao = 'com obesidade grau 3, CUIDADO!!!';
        }

        // switch (valorIMC) {
        //     case 18.5:
        //         classificacao = 'abaixo do peso!';
        //         break;
        //     case 25:
        //         classificacao = 'com o peso ideal. Parabéns!!';
        //         break;
        //     case 30:
        //         classificacao = 'levemente acima do peso.';
        //         break;
        //     case 35:
        //         classificacao = 'com obesidade grau 1, CUIDADO!'
        //         break;
        //     case 40: classificacao = 'com obesidade grau 2, CUIDADO!!';
        //         break;
        //     default : classificacao = 'com obesidade grau 3, CUIDADO!!!';
        //         break;
        // }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;

    }else {
        resultado.textContent = 'preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);