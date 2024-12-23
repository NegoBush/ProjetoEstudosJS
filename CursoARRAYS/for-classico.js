const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressão : chamando uma  variavel , pra executar nosso codigo
//segunda expressão : condição de execução ... vai continuar no loop ate a condição ser false
//terceira expressão : executada sempre no final e faz com que a variavel seja encrementada 

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}