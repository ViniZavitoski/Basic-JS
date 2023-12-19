function greetPilot() {
    alert("Bom dia, Piloto")
}
greetPilot()

//parametros da funçao:
function speedUp(velocity,acceleration) {
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity)
}
speedUp(68,10)

//parametros com valor padrao:
function greetPilot(name,message) {
    alert(message + "," + name)
}
greetPilot("Vinicius","Seja bem-vindo")

//é possivel tambem colocarmos valores associado aos parametros:
function greetPilot(name,message = "Olá") {
    alert(message + "," + name)
}
greetPilot("Vinicius")

//Armadilhas dos Parametros:
function greetPilot(name,message = "Olá") {
    alert(message + "," + name)
}
greetPilot() //Olá undefined, pois name nao esta definido

function speedUp(velocity, unit ="km/h", acceleration) {
    newVelocity = velocity + acceleration
    alert("Nova velocidade: "+ newVelocity + unit)
}
speedUp (50,20) //NaN20
//para isso nao ocorrer, faça desse jeito:
function speedUp(velocity, acceleration, unit ="km/h") {
    newVelocity = velocity + acceleration
    alert("Nova velocidade: "+ newVelocity + unit)
}
speedUp (50,20) //70 km/h se temos um parametro com 
//valor padrao entre dois sem padroes, o js nao vai
//jogar os valores pra quem nao tem valor padrao
//ele simplesmente vai continuar atribuindo na mesma ordem em que a funçao foi declarada.

//Retorno da funçao:
function speedUp(velocity,acceleration) {
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity);
    return newVelocity;
}
let velocity = 80;
let acceleration = 5;
console.log(velocity)
velocity = speedUp(velocity,acceleration) // retorno da funcao esta na variavel
console.log(velocity)
//ou:
console.log(speedUp(90,10))
//ou
speedUp(80,10)

//exercitando funçoes:
