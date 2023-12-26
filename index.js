let spaceshipName = prompt("Qual o nome de sua nave?")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja Fazer?\n" + "1-Acelerar a nave\n" + "2-Desacelerar a nave\n" + "3-Imprimir Relatório\n" + "4-Sair da nave")
    }
    return option
}

function speedUp( velocity ) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown( velocity ){
    let newVelocity = velocity - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBoardData( name,velocity ) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + " km/h")
}

do {
    chosenOption = showMenu()
    switch( chosenOption ) {
        case "1":
            spaceshipVelocity = speedUp( spaceshipVelocity )
            break
        case "2":
            spaceshipVelocity = slowDown( spaceshipVelocity )
            break
        case "3":
            printSpaceshipBoardData( spaceshipName,spaceshipVelocity )
            break
        default:
            alert( "Encerrando programa de bordo" )
            break
    }
} while( chosenOption != "4" )