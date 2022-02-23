var v=[4, 8, 7, 6]

//alert(v)
//alert(v[2])
v[1]=3
//allert(v)

var soma
soma= v[0]+v[3]
//alert("A soma dos elementos da posição 0 e 3 é" +soma)

lista=["Juquinha", 1910, "Rua A", "Irati", "PR", 80.5]
alert(lista)
alert(lista[3])

for(var i=0; i<lista.length; i++){//lenght método que determina o tamanho máximo do vetor

    document.write("<h2>"+lista[i]+"</h2>")//document.write comando que escreve no documento HTML
}

lista.push("84500-000")
lista.push("Teste")
alert(lista)
lista.pop()//remove o último elemento da lista
alert(lista)
lista.shift()//remove o primeiro elemento da lista
alert(lista)
lista.unshift("Zequinha")//adiciona um elemento na primeira posição da lista 
alert(lista)

var posicao

posicao = lista.indexOf("Curitiba")//exibe em qual posição esta a palavra
alert(posicao)