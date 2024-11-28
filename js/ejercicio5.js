const minutos = parseInt(prompt("Ingrese una cantidad de minutos"))

let segundos = minutos * 60;
let horas = minutos / 60;

alert(`En ${minutos} minutos hay:\n- ${segundos} segundos\n- ${horas} hora(s)`);
