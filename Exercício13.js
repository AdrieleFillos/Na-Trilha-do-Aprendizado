function somar(){
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    var resultado

    resultado = n1+n2

    document.getElementById("resultado").innerHTML= `O resultado da soma é ${resultado}`
}