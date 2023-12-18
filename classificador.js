// # DESAFIO - CLASSIFICADOR DE NÍVEL DE HERÓI #

let nomeHeroi = "Lionel Messi"
let qtdExp = 5000

if (qtdExp < 1000 ){
    console.log(" O herói chamado " + nomeHeroi + " está no nível: Ferro")
}else if (qtdExp >= 1001 && qtdExp <= 2000){
    console.log(" O herói chamado " + nomeHeroi + " está no nível: Bronze")
}else if (qtdExp >= 2001 && qtdExp <= 5000){
    console.log(" O herói chamado " + nomeHeroi + " está no nível: Prata" )
}else if (qtdExp >= 5001 && qtdExp <= 7000){
    console.log(" O herói chamado " + nomeHeroi + " está no nível: Ouro")
}else if (qtdExp >= 7001 && qtdExp <= 8000){
    console.log(" O herói chamado " + nomeHeroi + " está no nível: Platina")
}else if (qtdExp >= 8001 && qtdExp <= 9000){
    console.log(" O herói chamado " + nomeHeroi + " está no nível: Ascendente")
}else if (qtdExp >= 9001 && qtdExp <= 10000){
    console.log(" O herói chamado " + nomeHeroi + " está no nível: Imortal")
}else{
    console.log(" O herói chamado " + nomeHeroi + " está no nível: Radiante")
}