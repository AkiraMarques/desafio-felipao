/*
2) Calculadora de partidas Rankeadas
**O que deve ser utilizado**

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
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/

let saldoTotal = diferenca(142, 80);
let rankFinal = rank(saldoTotal);

function diferenca(vitorias, derrotas) {
    return vitorias - derrotas;
}

function rank(saldo) {
    let rankFinal;
    if (saldo <= 10) {
        rankFinal = "Ferro";
    } else if (saldo > 10 && saldo <= 20) {
        rankFinal = "Bronze";
    } else if (saldo > 21 && saldo <= 50) {
        rankFinal = "Prata";
    } else if (saldo > 51 && saldo <= 80) {
        rankFinal = "Ouro";
    } else if (saldo > 81 && saldo <= 90) {
        rankFinal = "Diamante";
    } else if (saldo > 91 && saldo <= 100) {
        rankFinal = "Diamante";
    } else {
        rankFinal = "Imortal";
    }
    return rankFinal;
}

console.log(`O Herói tem saldo de ${saldoTotal} de vitórias e está no rank de ${rankFinal}`);


