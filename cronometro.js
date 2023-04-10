const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("min");
const segundo = document.getElementById("seg");

const lancamento = "31 dec 2022";

function countdown() {
  const dataLanc = new Date(lancamento);
  const hoje = new Date();
}

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

const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

const lancamento = "31 dec 2022";

function countdown() {
  const dataLanc = new Date(lancamento);
  const hoje = new Date();

  const segTotal = (dataLanc - hoje) / 1000;
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
