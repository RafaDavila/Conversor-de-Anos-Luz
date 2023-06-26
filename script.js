let distanceInLY = prompt("Digite a distância em anos-luz")

let chosenOption = prompt("Para qual unidade deseja converter? \n 1. Parse(pc) \n 2. Unidade Astrônomica (AU) \n 3.Quilômetros (km) \n\n (Digite o número da opção desejada.)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break;
    case "2":
        chosenUnity = "Unidade Astrônomica"
        convertedDistance = distanceInLY * 63241.1    
        break;
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10,12)
        break;

    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
        break;
}

alert("Distância em Anos-Luz " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)
