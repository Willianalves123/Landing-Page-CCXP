let dia = document.getElementById("dia");
let hora = document.getElementById("hora");
let minuto = document.getElementById("min");
let segundo = document.getElementById("seg");

const lancamento = "31 dec 2023";

// function countdown() {
//   const dataLanc = new Date(lancamento);
//   const hoje = new Date();
// }
const dataLanc = new Date(lancamento);
let hoje = new Date();

const segTotal = (dataLanc - hoje) / 1000;
const dias = Math.floor(segTotal / 3600 / 24);
const horas = Math.floor((segTotal / 3600) % 24);
const minutos = Math.floor(segTotal / 60) % 60;
const segundos = Math.floor(segTotal % 60);

dia.innerHTML = `<strong> ${dias} D </strong>`;

dia.innerHTML = `<strong> ${dias} D </strong>`;
hora.innerHTML = `<strong> ${horas} H </strong>`;
minuto.innerHTML = `<strong> ${minutos} M </strong>`;
segundo.innerHTML = `<strong> ${segundos} S </strong>`;

function countdown() {
  const segTotal = (dataLanc - hoje) / 1000;
  hoje = new Date();
  console.log(segTotal);

  const dias = Math.floor(segTotal / 3600 / 24);
  const horas = Math.floor((segTotal / 3600) % 24);
  const minutos = Math.floor(segTotal / 60) % 60;
  const segundos = Math.floor(segTotal % 60);

  dia.innerHTML = `<strong> ${dias} D </strong>`;
  hora.innerHTML = `<strong> ${horas} H </strong>`;
  minuto.innerHTML = `<strong> ${minutos} M </strong>`;
  segundo.innerHTML = `<strong> ${segundos} S </strong>`;
}

countdown();

setInterval(countdown, 1000);
