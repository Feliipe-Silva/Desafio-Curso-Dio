// aprendendo a usar Jsom. -> significado - Java_Script Object Notation 

let variados = {
    nome: 'Felipe',
    idade: 28,
    profissões: {
        0: ['motoboy'],
        1: ['conferente'],
    },
}
valores(variados)

function valores(variados) {
    console.log('nome: '+variados.nome);
    console.log('idade: '+variados.idade)
    //console.log('profissôes: '+variados.profissões[0])
    console.log('-----------------------------------')
// for in  let i= 0  verredura em variados.profissões
    for (let i in variados.profissões) {
        let a = variados.profissões[i] // variavel [a]recebi todos os valores dentro de profissôes. 
        console.log('profissão: '+a)
    }
}