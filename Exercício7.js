var i, idade, qtdemulheres, qtdehomens, maioridadeh, maioridadem, menoridadeh, menoridadem, idadeh, idadem, menoresdeidade, p1, p2, p3, p4, p5;

for(i=1;i<=5;i++){
idade:parseInt(prompt("Digite sua idade:"));
sexo=prompt("Digite se seu sexo é masculino ou feminino:")

if(sexo=="masculino"){
    qtdehomens++;
    idadeh+=idade;
    menoridadeh=menoridadeh;
    maioridadeh=maioridadeh;
}
if(sexo=="feminino"){
    qtdemulheres++;
    idadem=idade;
    menoridadem=menoridadem;
    maioridadem=maioridadem;
}
}
alert("O total de homens é:"+qtdehomens);
alert("O total de mulheres é:"+qtdemulheres);
alert("A idade do homem mais novo é:"+menoridadeh);
alert("A idade da mulher mais nova é"+menoridadem);
alert("A idade do homem mais velho é:"+maioridadeh);
alert("A idade da mulher mais velha é:"+maioridadem);

if(idade<=17){
    alert("A quantidade total de menores de idade é:"+menoresdeidade);
}