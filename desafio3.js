/*
# 3) Escrevendo as classes de um jogo

**O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as 
seguintes propriedades:

- nome
- idade
- tipo (ex.: guerreiro, mago, monge, ninja)

além disso deve ter um método chamado atacar que deve atender os seguintes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}"
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela
abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

*/


class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        switch (this.tipo){
            case 'mago':
                console.log(`O ${this.tipo} atacou usando magia`);
                break;
            case 'guerreiro':
                console.log(`O ${this.tipo} atacou usando espada`);
                break;
            case 'monge':
                console.log(`O ${this.tipo} atacou usando artes marciais`);
                break;
            case 'ninja':
                console.log(`O ${this.tipo} atacou usando shuriken`);
                break;
        }
    }
    
    status(){
        console.log(`Nome: ${this.nome}\n Idade: ${this.idade}\n Classe: ${this.tipo}`);
    }
}

let cloud = new personagem("Cloud", 24, "guerreiro".toLowerCase());
let yuffie = new personagem("Yuffie", 20, "ninja".toLowerCase());
let tifa = new personagem("Tifa", 22, "monge".toLowerCase());
let vivi = new personagem("Vivi", 234, "mago".toLowerCase());

cloud.status();
yuffie.status();
tifa.status();
vivi.status();

cloud.atacar();
yuffie.atacar();
tifa.atacar();
vivi.atacar();
