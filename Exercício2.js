var dolares;

function conversor(){
    var reais=document.getElementById('reais').value;
    reais=parseFloat(reais);

    dolares=reais/5.4;
    console.log(dolares);
    
    alert(dolares+"dólares");
}