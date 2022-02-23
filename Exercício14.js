function enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")
    var ok=false

    if(nome.value!="" && nome.value.indexOf("")!=-1)
    {
        if(email.value.indexOf("@")!=-1)
        {
        alert(nome.value+"agradecemos o seu contato!")
        ok=true
    }
    else
    {
        alert("Digite um email válido")
    }
}
else
{
    alert("Preencha o seu nome completo")
}

    return ok
}