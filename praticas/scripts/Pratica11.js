a = 20;
b = 10;
soma = a + b;
alert("Olá, Mundo! " + soma);

nome = prompt("Entre com o seu nome..:");
document.getElementById("writeName").innerHTML += nome;
document.getElementById("inputAge").value += nome;

n1 = prompt("Digite um numero");
if(n1){
    alert("Valor de n1: " + n1);
}

n2 = prompt("Digite outro numero");
if(n2){
    alert("Valor de n2: " + n2);
}

soma = parseInt(n1) + parseInt(n2);
document.write("<p>Soma = " + soma + "<p>");

alert("Pronto?");

for(i = 5; i > 0; i--){
    alert(i);
}