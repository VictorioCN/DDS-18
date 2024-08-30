/*
//objeto window = janela do navegador
console.log("ola")
window.console.log("mais um dia em campo")
window.alert("a vamu nessa")
window.prompt("como vc tá?")


console.log(document.head)
console.log(document.body)


//Acessando elementos por tag,class e id
var titulo = document.getElementsByTagName("h1")
var paragrafos = document.getElementsByClassName("para")
var para3 = document.getElementById("p3")

paragrafos[0].innerText = "Tauba"
para3.innerHTML = "<h3> novo texto aqui </h3>"

var p1 = document.getElementsByTagName("p")[0]
p1.style.backgroundColor = "green"

para3.style.color = "red"


function cliquei(){
    console.log("Cliquei de novo")
}

*/

function outroFoco(){
    console.log("mudei, o foco não esta mais na caixa")
}

function trocaTexto(){
    console.log("Estou digitando")
}

function trocaTexto(textoCaixinha){
    var texto = document.getElementById("textoPraTrocar")
    texto.innerText = textoCaixinha.value
}

function corVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "60px"

}

function corAzul(elemento){
    elemento.style.color = "azul"
    elemento.style.fontSize = "30px"

}