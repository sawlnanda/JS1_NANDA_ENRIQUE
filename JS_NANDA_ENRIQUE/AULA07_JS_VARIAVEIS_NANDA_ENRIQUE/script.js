//diferença de var, let e const

//var
var nome = "adamastor"
console.log(nome)

if(nome ==="adamastor"){
     var escola = "CESF"
console.log(escola)
}
console.log(escola)  

escola = "sagrada"
console.log(escola)

//com variaveis do tipo var, podemos acessar(visibilidade)
//fora do escopo de criação do escopo

//let
if(nome ==="adamastor"){
    let curso = "ds"
    console.log(curso)
}
//console.log(curso)

curso = "desenvolvimento"
console.log(curso)

//let so permite acessoa  variavel no escopo onde elel foi criado(escopo de bloco)
//se reatribuirmos vslor a ela é como se estivessemos declarando uma noca variavel
//do tipo var com o mesmo nome curso

//const

const cargo = "estudante"
console.log(cargo)
//cargo = "programador"
console.log(cargo)

//variaveis do tipo const tem escopo de bloco, com as let, mas ela não
//permite reatribuição de valor

//criação de variaveis sem atribuição de classes inicial

var aluno1 
aluno1 = "ana clara"
console.log (aluno1)

let aluno2
aluno2 = "bernardo"
console.log(aluno2)

//const aluno3
//variaveis do tipo const nao podem ser apenas declaradas
const aluno3 ="cremilda"
console.log(aluno3)
