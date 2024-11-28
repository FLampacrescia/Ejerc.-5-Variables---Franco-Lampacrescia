function calcularIva (precio) {
    const dolar = 1130;
    const iva = 1.21;

    const precioCalculado = (precio * dolar) * iva

    return precioCalculado
}

const precioCalculado = calcularIva(parseInt(prompt("Ingrese un valor en dólares para calcular su IVA.")))
alert(`El precio del producto convertido a pesos argentinos + IVA es ${precioCalculado}`)