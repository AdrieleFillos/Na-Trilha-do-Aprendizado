function verificar(){
    var numero1, numero2, numero3, numero4, numero5, maior;
    numero1=prompt("Digite o primeiro número:")
    console.log(numero1);
    numero2=prompt("Digite o segundo número:")
    console.log(numero2);
    numero3=prompt("Digite o terceiro número:")
    console.log(numero3);
    numero4=prompt("Digite o quarto número:")
    console.log(numero4);
    numero5=prompt("Digite o quinto número:")
    console.log(numero5);

    if(numero1>=numero2 || numero1>=numero3 || numero1>=numero4 || numero1>=numero5){
       alert("O maior número é:"+maior==numero1);
    }
    else if(numero2>=numero1 || numero2>=numero3 || numero2>=numero4 || numero2>=numero5){
        alert("O maior número é:"+maior==numero2)
    }
    else if(numero3>=numero1 || numero3>=numero2 || numero3>=numero4 || numero3>=numero5){
        alert("O maior número é:"+maior==numero3)
    }
    else if(numero4>=numero1 || numero4>=numero2 || numero4>=numero3 || numero4>=numero5){
        alert("O maior número é:"+maior==numero4)
    }
    else if(numero5>=numero1 || numero5>=numero2 || numero5>=numero3 || numero5>=numero4){
        alert("O maior número é:"+maior==numero5)
    }
    alert("maior número:"+maior);
}
