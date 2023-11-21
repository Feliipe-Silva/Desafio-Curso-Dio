class herói {
    constructor(tipo, ataque){
        this.t = tipo
        this.a = ataque
    }
    guerreiro() {
        console.log(`- "o **${this.t}** atacou usando **${this.a}**"`)
    }
    mago() {
        console.log(`- "o **${this.t}** atacou usando **${this.a}**"`)
    }
    monge() {
        console.log(`- "o **${this.t}** atacou usando **${this.a}**"`)
    }
    ninja() {
        console.log(`- "o **${this.t}** atacou usando **${this.a}**"`)
    }
}

let g = new herói('gueirreiro', 'espada')
g.guerreiro()

let m = new herói('mago', 'magia')
m.mago()

let mon = new herói('monge', 'artes marciais')
mon.monge()

let n = new herói('ninja', 'shuriken')
n.ninja()
//-------------------------------------------------------------

/*3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
ex: mago atacou usando magia
guerreiro atacou usando espada */