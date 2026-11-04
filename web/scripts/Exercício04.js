/* Faça um programa que verifica de uma pessoa é
menor de idade */

idade = prompt("Informe sua idade: ");

document.getElementById("idadePrint").innerHTML += idade;

if(idade >= 18){
    document.getElementById("idadeCheck").innerHTML += "sim";
}else{
    document.getElementById("idadeCheck").innerHTML += "não";
}

/* Faça um programa para verificar se um determinado
número inteiro é divisível por 3 e por 5 */

num = prompt("Digite um numero: ");

document.getElementById("numPrint").innerHTML += num;

if(num % 3 == 0 && num % 5 == 0){
    document.getElementById("numPrint").innerHTML += "sim";
}else{
    document.getElementById("numCheck").innerHTML += "não";
}

/* Ler cinco valores fornecidos pelo usuário e
calcular a média dos valores. */

media = 0;

for(i = 1; i <= 5; i++){
    media += parseInt(prompt("Digite uma nota (" + i + "/5) "));
}

media /= 5;
document.getElementById("mediaPrint").innerHTML += media;