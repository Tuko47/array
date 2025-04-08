let listapresenca = ["mario", "luigi", "bowser", "peach"];

function verificarpresença(nome){
    if(listapresenca.includes("nome")){
        return nome + "está presente"
    }
    else{
        "não está presente"
    }
}
console.log(verificarpresença("luigi"))
console.log(verificarpresença("Mario"))
console.log(verificarpresença("Yoshi"))

