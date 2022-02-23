function calcularmedia(){
    var media, nota1, nota2, nota3, nota4;

    nota1=prompt("Escreva a primeira nota:")
    console.log(nota1);
    nota2=prompt("Escreva a segunda nota:")
    console.log(nota2);
    nota3=prompt("Escreva a terceira nota:")
    console.log(nota3);
    nota4=prompt("Escreva a quarta nota:")
    console.log(nota4);

    media=(nota1+nota2+nota3+nota4)/4;

    if(media<7){
        alert=("Você está com conceito D!"+media);
    }
    else if(media>=7){
        alert("Você está com conceito C!"+media);
    }
    else if(media>=8){
        alert("Você está com conceito B!"+media);
    }
    else if(media>=10){
        alert("Você está com conceito A!"+media);
    }
}