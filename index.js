/* 1) Desafio Classificador de nível de Herói

**O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de 
experiência (XP) de um herói, depois utilize uma estrutura 
de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro; --> corrigi para menor ou igual para não ficar um pequeno gap sem nivel quando chegasse a 1.000 de xp exato
Se XP for entre 1.001 e 2.000 = Bronze;
Se XP for entre 2.001 e 5.000 = Prata;
Se XP for entre 6.001 e 7.000 = Ouro; --> corrigi de 6.001 para 5.001 para que não ficasse um gap sem nivel
Se XP for entre 7.001 e 8.000 = Platina;
Se XP for entre 8.001 e 9.000 = Ascendente;
Se XP for entre 9.001 e 10.000 = Imortal;
Se XP for maior ou igual a 10.001 = Radiante;

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome} está no nível de **{nivel}"

*/

const nomeDoHeroi = "Link";
let XpDoHeroi = 9569;
let nivelDoHeroi;

if (XpDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro";
} else if (XpDoHeroi >= 1001 && XpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (XpDoHeroi >= 2001 && XpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (XpDoHeroi >= 5001 && XpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (XpDoHeroi >= 7001 && XpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (XpDoHeroi >= 8001 && XpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (XpDoHeroi >= 9001 && XpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log("O herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);