const estudante = {
    nome: 'Estevan Wesley',
    idade: 30,
    cpf: '7020133445',
    turma: 'JavaScript'
}

estudante.telefone = '551199999999';
console.log(estudante.telefone);
console.log(estudante);

//  quando eu tento colocar outro nome para alterar , ele cria  outro objeto.

estudante.nome = 'Nego Bush'
console.log(estudante);

// tambem  posso fazer um objeto vazio e atribuir oq eu quiser nele.

const estudante2 ={};
estudante2.nome = 'Estevan Nego'
console.log(estudante2);

