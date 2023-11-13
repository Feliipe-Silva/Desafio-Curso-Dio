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
