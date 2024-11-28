const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2013,
    color: "Gris",
    potencia: 132,
    velocidadMaxima: 180,
    tipo: "Sedán",
    precio: 20000
};

console.log("Detalles del auto:", auto);

document.write(`<p style="font-size:30px;">El <strong>${auto.marca} ${auto.modelo} del año ${auto.año}</strong> es reconocido por su fiabilidad y cómodidad debido a sus componentes de excelente calidad. En cuanto a rendimiento, también se destaca de la competencia, pudiendo alcanzar una <strong>velocidad máxima de ${auto.velocidadMaxima} km/h.</strong></p>`);
