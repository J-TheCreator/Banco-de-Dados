var prompt = require("prompt-sync")()

//Declaração de Variáveis:
let array = []
let n, i, ca, q, rep, de, pa
let quartos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

do{
    //Repetição de Erro:
    if(rep !== 1 && rep !== 2){
        do{
        rep = Number(prompt("Cadastro a registrar, 1.sim 2.não: "))
        if(rep === 2){
            return
        }
        if(rep !== 1 && rep !== 2){
            console.log("Valor invalido")
        }
        }while(rep !== 1 && rep !== 2)
    }
do{
    //Registro de Hóspedes:
    n = prompt("Nome de registro: ")
    i = Number(prompt("Idade atual: "))
    ca = Math.floor(Math.random() * 1001)
    
    console.log("A diaria é de R$100.00")
    de = Number(prompt("Dias de estadia: "))
    pa = de * 100

    console.log(`quartos disponiveis: ${quartos}`)
    q = Number(prompt("Qual quarto de sua escolha: "))

    //Atualização dos Quartos Disponíveis:
    quartos[q-1] = ("Ocupado")

    array.push({ nome: n, idade: i, cadastro: ca, quarto: q, estadia: de, valor: pa})
for(const cad of array){
    
    //Armazenamento de Dados:
    const {nome, idade, cadastro, quarto, estadia, valor} = cad
    console.log(`Nome: ${nome} - Idade: ${idade} - Cadastro: ${cadastro} - Quarto: ${quarto} - tempo estadia: ${estadia} - Valor a pagar: R$${valor.toFixed(2)} `)
}
    rep = Number(prompt("novo cadastro a registrar, 1.sim 2.não: "))
}while(rep == 1)
    if(rep !== 1 && rep !== 2){
        console.log("Valor invalido")
    }

//Validação do valor de 'rep'
}while(rep !== 1 && rep !== 2)

//Finalização do Cadastro:
console.log("Cadastro finalizado")

//Exibição dos Registros:
for(const cad of array){
    const {nome, idade, cadastro, quarto, estadia, valor} = cad
    console.log(`Nome: ${nome} - Idade: ${idade} - Cadastro: ${cadastro} - Quarto: ${quarto} - tempo estadia: ${estadia} - Valor a pagar: R$${valor.toFixed(2)} `)
}