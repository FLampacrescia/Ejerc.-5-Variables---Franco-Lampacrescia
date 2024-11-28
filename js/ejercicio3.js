let numero1 = parseInt(prompt("Ingrese un número"))
let numero2 = parseInt(prompt("Ingrese otro número"))
let operador = prompt("Ingrese un operador para realizar la operación (+, -, * o /)")

if (operador === "+") {
    let resultado = numero1 + numero2
    alert(`El resultado de la operación es ${resultado}`)
} else if (operador === "-") {
    let resultado = numero1 - numero2
    alert(`El resultado de la operación es ${resultado}`)
} else if (operador === "*") {
    let resultado = numero1 * numero2
    alert(`El resultado de la operación es ${resultado}`)
} else if (operador === "/") {
    let resultado = numero1 / numero2
    alert(`El resultado de la operación es ${resultado}`)
} else {
    alert(`Ingrese una operación válida.`)
}