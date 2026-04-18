// CONTAR
let contador = 0;

function contar(el){
if(!el.classList.contains("ok")){
contador++;
el.classList.add("ok");
el.style.opacity = 0.5;

document.getElementById("contador").innerText = contador;

hablar(contador.toString()); // AUDIO
}
}

function reiniciar(){
contador = 0;
document.getElementById("contador").innerText = 0;

document.querySelectorAll("#estrellas span").forEach(e=>{
e.classList.remove("ok");
e.style.opacity=1;
});
}
// ESPERAR QUE CARGUE TODO
document.addEventListener("DOMContentLoaded", function () {

// SUMA
document.getElementById("num1").addEventListener("input", calcularSuma);
document.getElementById("num2").addEventListener("input", calcularSuma);

function calcularSuma() {
let n1 = parseFloat(document.getElementById("num1").value) || 0;
let n2 = parseFloat(document.getElementById("num2").value) || 0;

document.getElementById("resultadoSuma").innerText = "Resultado: " + (n1 + n2);
}

// RESTA
document.getElementById("num3").addEventListener("input", calcularResta);
document.getElementById("num4").addEventListener("input", calcularResta);

function calcularResta() {
let n1 = parseFloat(document.getElementById("num3").value) || 0;
let n2 = parseFloat(document.getElementById("num4").value) || 0;

document.getElementById("resultadoResta").innerText = "Resultado: " + (n1 - n2);
}
// JUEGO 
let a, b, respuestaCorrecta;

function nuevaPregunta() {
a = Math.floor(Math.random() * 10);
b = Math.floor(Math.random() * 10);

respuestaCorrecta = a + b;
document.getElementById("pregunta").innerText = a + " + " + b + " = ?";
}

window.verificar = function () {
let respuesta = document.getElementById("respuestaJuego").value;

if (respuesta == respuestaCorrecta) {
document.getElementById("mensajeJuego").innerText = "✅ Correcto";
} else {
document.getElementById("mensajeJuego").innerText = "❌ Incorrecto";
}

nuevaPregunta();
}

nuevaPregunta();
});
// ÁREA
function calcularArea() {
let figura = document.getElementById("figura").value;
let resultado = 0;

if (figura === "cuadrado") {
let lado = document.getElementById("lado").value;
resultado = lado * lado;
}
else if (figura === "rectangulo") {
let base = document.getElementById("base").value;
let altura = document.getElementById("altura").value;
resultado = base * altura;
}
else if (figura === "circulo") {
let radio = document.getElementById("radio").value;
resultado = Math.PI * radio * radio;
}
else if (figura === "triángulo") {
let base = document.getElementById("base").value;
let altura = document.getElementById("altura").value;
resultado = base * altura;
    }
document.getElementById("resultadoArea").innerText = "Área: " + resultado.toFixed(2);
}

// FIGURAS
function dibujarFigura() {
let tipo = document.getElementById("tipoFigura").value;
let contenedor = document.getElementById("figuraDibujo");
contenedor.innerHTML = "";

if (tipo === "circulo") {
contenedor.innerHTML = '<div class="circulo"></div>';
}
else if (tipo === "cuadrado") {
contenedor.innerHTML = '<div class="cuadrado"></div>';
}
else if (tipo === "rectangulo") {
contenedor.innerHTML = '<div class="rectangulo"></div>';
}
}


// CARITAS
function respuesta(tipo) {
let mensaje = document.getElementById("mensaje");

if (tipo === "excelente") {
mensaje.innerText = "😊 ¡Excelente trabajo!";
mensaje.style.color = "green";
}
else if (tipo === "regular") {
mensaje.innerText = "😐 Puedes mejorar";
mensaje.style.color = "orange";
}
else {
mensaje.innerText = "😢 Sigue intentando";
mensaje.style.color = "red";
}
}
// MOSTRAR CAMPOS Y DIBUJAR AUTOMÁTICO
function mostrarCampos() {
let figura = document.getElementById("figura").value;
let campos = document.getElementById("campos");
let dibujo = document.getElementById("dibujoArea");

campos.innerHTML = "";
dibujo.innerHTML = "";

if (figura === "circulo") {
campos.innerHTML = '<input type="number" id="radio" placeholder="radio">';
dibujo.innerHTML = '<div class="circuloArea"></div>';
}
else if (figura === "cuadrado") {
campos.innerHTML = '<input type="number" id="lado" placeholder="Lado">';
dibujo.innerHTML = '<div class="cuadradoArea"></div>';
}

else if (figura === "rectangulo") {
campos.innerHTML = `
<input type="number" id="base" placeholder="Base">
<input type="number" id="altura" placeholder="Altura">
`;
dibujo.innerHTML = '<div class="rectanguloArea"></div>';
}
else if (figura === "triangulo") {
campos.innerHTML = `
<input type="number" id="base" placeholder="Base">
<input type="number" id="altura" placeholder="Altura">
`;
dibujo.innerHTML = '<div class="trianguloArea"></div>';
}
}

// CALCULAR ÁREA Y MOSTRAR EN LA FIGURA
function calcularArea() {
let figura = document.getElementById("figura").value;
let resultado = 0;
let dibujo = document.getElementById("dibujoArea");

 if (figura === "circulo") {
let radio = parseFloat(document.getElementById("radio").value);

if (isNaN(radio)) {
alert("Ingresa el radio");
return;
}

resultado = Math.PI * radio * radio;

dibujo.innerHTML = `
<div class="circuloArea">
${resultado.toFixed(2)}
</div>
`;
}

else if (figura === "cuadrado") {
let lado = parseFloat(document.getElementById("lado").value);

if (isNaN(lado)) {
alert("Ingresa el lado");
return;
}

resultado = lado * lado;

dibujo.innerHTML = `
<div class="cuadradoArea">
${resultado}
</div>
`;
}

else if (figura === "rectangulo") {
let base = parseFloat(document.getElementById("base").value);
let altura = parseFloat(document.getElementById("altura").value);

if (isNaN(base) || isNaN(altura)) {
alert("Ingresa datos");
return;
}

resultado = base * altura;

dibujo.innerHTML = `
<div class="rectanguloArea">
${resultado}
</div>
`;
}

else if (figura === "triangulo") {
let base = parseFloat(document.getElementById("base").value);
let altura = parseFloat(document.getElementById("altura").value);

if (isNaN(base) || isNaN(altura)) {
alert("Ingresa datos");
return;
}
resultado = (base * altura) / 2;

dibujo.innerHTML = `
<div class="trianguloArea">
<div class="trianguloTexto">${resultado}</div>
</div>
`;
}

document.getElementById("resultadoArea").innerText =
"Área = " + resultado;
}
