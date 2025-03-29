console.log("Digite o nome do seu Herói:")
let herói = "José Neto"
console.log(herói)
console.log("O nome do seu Herói será " + herói + "?")
console.log("Sim")
console.log("Bem vindo, " + herói + "!")
console.log("...\n...\n Carregando...\n...\n...")
let xp = "10001"
console.log("Parabéns! Você alcançou " + xp + " de xp em batalhas PvP. \n")


if (xp <= 1000){
	console.log("Seu Ranking é Ferro")
}

else if (xp >= 1001 && xp <= 2000){
	console.log("Seu Ranking é Bronze")
}

else if (xp >= 2001 && xp <= 5000){
	console.log("Seu Ranking é Prata")
    
}

else if (xp >= 5001 && xp <= 7000){
	console.log("Seu Ranking é Ouro")  
}

else if (xp >= 7001 && xp <= 8000){
	console.log("Seu Ranking é Platina")
}

else if (xp >= 8001 && xp <= 9000){
	console.log("Seu Ranking é Ascendente")
}

else if (xp >= 9001 && xp <= 10000){
	console.log("Seu Ranking é Imortal")
}

else if (xp >= 10001){
	console.log("Seu Ranking é Radiante")
}


const divisao = "_".repeat(70)
console.log(divisao)

console.log("\nO Herói de nome " + herói + " está no nível " + xp)


switch(true){
	case ("xp <= 1000"):
	console.log("Ele é Ferro")
    	break

    case (xp >= 1001 && xp <= 2000):
    	console.log("Ele é Bronze")
    	break

    case (xp >= 2001 && xp <= 5000):
	console.log("Ele é Prata")
    	break

   case (xp >= 5001 && xp <= 7000):
        console.log("Ele é Ouro")
        break
        
    case (xp >= 7001 && xp <= 8000):
        console.log("Ele é Platina")
        break
        
    case (xp >= 8001 && xp <= 9000):
        console.log("Ele é Ascendente")
        break
        
    case (xp >= 9001 && xp <= 10000):
        console.log("Ele é Imortal")
        break
        
    case (xp >= 10001):
        console.log("\nEle é Radiante")
        console.log("\nDepois de muitas batalhas vencidas e experiências acumuladas...\nVocê se tornou uma lenda.")
        break
}
console.log(divisao)
