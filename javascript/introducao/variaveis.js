var nome = 'Giovanna';

nome = 2 

var idade = 19;
var peso = 70.5;
var humano = true;
var alunos = ['Giovanna', 'Guilherme', 'Daniel']; // 0, 1, 2

var aluno = {
    nome: alunos[0],
    peso: 70.5,
    idade: 19,
    humano: true
};
// aluno['nome'] ou aluno.nome ou const { nome } = aluno

console.log(aluno['nome']);
