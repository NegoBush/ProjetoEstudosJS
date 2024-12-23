const estudante = {
    nome: 'Estevan Wesley',
    idade: 30,
    cpf: '7020133445',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['83 99416-8576' , '83 99606-8092'],
    endereco: [{
        rua: 'Rua manoel guedes da costa',
        numero: '89',
        cidade: 'Esperança'
    }]
}

estudante.endereco.push({
    rua: 'Rua manoel rodrigues',
    numero: '223',
    cidade: ''
})

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplemento);