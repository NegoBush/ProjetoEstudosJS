const notas = [10,9.5,8,7,6];

const notasDobradas = notas.map((nota) => nota * 2);

// const notasAtualizadas = notas.map(function (nota) { 
//     return nota + 1;
// })

// tirou a function e substituiu pela arrow function => e no arrow functions pode tirar o return e as chaves

//                                                         if   else 
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);
console.log(notasDobradas);
