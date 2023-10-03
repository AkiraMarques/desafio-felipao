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
let XpDoHeroi = 0;
let nivelDoHeroi;

for (XpDoHeroi; XpDoHeroi <= 1000; XpDoHeroi += 500) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ferro e continua a treinar");
    console.log("XP do herói: " + XpDoHeroi);
} 
for (XpDoHeroi; XpDoHeroi >= 1001 && XpDoHeroi <= 2000; XpDoHeroi += 500) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Bronze e continua a treinar");
    console.log("XP do herói: " + XpDoHeroi);
} 
for (XpDoHeroi; XpDoHeroi >= 2001 && XpDoHeroi <= 5000; XpDoHeroi += 500) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Prata e continua a treinar");
    console.log("XP do herói: " + XpDoHeroi);
} 
for (XpDoHeroi; XpDoHeroi >= 5001 && XpDoHeroi <= 7000; XpDoHeroi += 500) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ouro e continua a treinar");
    console.log("XP do herói: " + XpDoHeroi);
} 
for (XpDoHeroi; XpDoHeroi >= 7001 && XpDoHeroi <= 8000; XpDoHeroi += 500) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Platina e continua a treinar");
    console.log("XP do herói: " + XpDoHeroi);
} 
for (XpDoHeroi; XpDoHeroi >= 8001 && XpDoHeroi <= 9000; XpDoHeroi += 500) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ascendente e continua a treinar");
    console.log("XP do herói: " + XpDoHeroi);
} 
for (XpDoHeroi; XpDoHeroi >= 9001 && XpDoHeroi <= 10000; XpDoHeroi += 500) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Imortal e continua a treinar");
    console.log("XP do herói: " + XpDoHeroi);
} 
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Radiante e continua a treinar");
console.log("Nivel máximo alcançado");