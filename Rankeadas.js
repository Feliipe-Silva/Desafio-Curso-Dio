let vitoria = 101
let derrotas = 1
let totalSaldo = vitoria - derrotas
let nivel = partidas(vitoria, derrotas)
//
console.log(`O Herói tem de saldo de **${totalSaldo}** está no nível de **${nivel}**`)

function partidas(vi, de) {
    let res = vi - de;

    if (res <= 10) {
        res = 'Ferro';
    } else if (res <= 20) {
        res = 'Bronze';
    } else if (res <= 50) {
        res = 'Prata';
    } else if (res <= 80) {
        res = 'Ouro';
    } else if (res <= 90) {
        res = 'Diamante';
    } else if (res <= 100) {
        res = 'Lendário';
    } else if (res > 100) {
        res = 'Imortal';
    }
    return res;
}

//--------------------------------------------------------------------------------

/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */
