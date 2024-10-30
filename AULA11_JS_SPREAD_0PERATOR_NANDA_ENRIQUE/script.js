let primeiros = [1,2,3];    

let numeros1 = [primeiros,4,5,6];

let numeros2 = [...primeiros,4,5,6];

console.log(numeros1);

console.log(numeros2);

//spreadando um objeto

let pessoa = {
    nome: 'Enrique',
    idade: 16,
    cargo: 'aluno'
};

let dadosPessoa = {
    ...pessoa,
    status: 'Ativo',
    cidade: 'Campo Largo'
}

console.log(dadosPessoa);

//exemplificando de forma mais realista

function NovoUsuario(info){
    //console.log(info);
    let dados = {
        ...info,
        status : 'ativo',
        inicio : '20/09/2024',
        codigo : '123'
    };
    console.log(dados);
}

NovoUsuario ({nome:'Admilson', sobrenome:'Rico', cargo:'estagiário'});

