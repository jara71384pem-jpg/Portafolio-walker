function verificarNumero(){
let v = document.getElementById("num").value;
document.getElementById("resNum").textContent = (v==5)?"Correcto":"Intenta otra vez";
}

function verificarSuma(){
let v = document.getElementById("sum").value;
document.getElementById("resSuma").textContent = (v==3)?"Bien":"Mal";
}

function verificarResta(){
let v = document.getElementById("rest").value;
document.getElementById("resResta").textContent = (v==3)?"Correcto":"Error";
}

function evaluar(e){
document.getElementById("final").textContent = "Elegiste: "+e;
}

function suma2(){
let v = document.getElementById("suma2").value;
document.getElementById("r2").textContent = (v==7)?"Correcto":"Error";
}

function area(){
let l = document.getElementById("lado").value;
document.getElementById("resArea").textContent = "Área = "+(l*l);
}

