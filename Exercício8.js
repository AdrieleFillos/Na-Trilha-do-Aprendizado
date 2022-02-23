function fatorial(valor){
    var n
    n=prompt("Digite um número:");
     if(valor<0){
         return"o número tem que ser maior ou igual a 0"
     }
     else if((valor==0 || valor==1)){
         return 1;
     }
     else{
         var acumula=1
         for(n=valor; n>1; n--){
             acumula=acumula*n;
         }
     }
     return acumula;
    }