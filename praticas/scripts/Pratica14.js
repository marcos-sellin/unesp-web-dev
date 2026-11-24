var x = 10;
document.getElementById('var1').innerHTML += x;

var x = 'ABCD';
document.getElementById('var2').innerHTML += x;

let y = 5;
document.getElementById('let1').innerHTML += y;

let z = 0;
document.getElementById('let2').innerHTML += z;

for(z++; z < 10; z++){
    document.getElementById('let2').innerHTML += ', ' + z;
}

const PI = 3.14159;
document.getElementById('const1').innerHTML += PI;

const arrayCarros = [];
arrayCarros[0] = 'Carro 1';
arrayCarros[1] = 'Carro 2';
arrayCarros[2] = 'Carro 3';

document.getElementById('array1').innerHTML += arrayCarros[0];

for(let i = 1; i < 3; i++){
    document.getElementById('array1').innerHTML += ', ' + arrayCarros[i];
}

const arrayCarros2 = ['Carro 4', 'Carro 5', 'Carro 6'];
document.getElementById('array2').innerHTML += arrayCarros2 + ', com um total de ' + arrayCarros2.length + ' carros';

const arrayCarros3 = new Array('carro 7', 'carro 8');
document.getElementById('array3').innerHTML += arrayCarros3 + ', com um total de ' + arrayCarros3.length + ' carros';

arrayCarros.push('Novo Carro');
document.getElementById('array4').innerHTML += arrayCarros;

arrayCarros.pop();
document.getElementById('array5').innerHTML += arrayCarros;

arrayCarros.unshift('Novo Carro');
document.getElementById('array6').innerHTML += arrayCarros;

arrayCarros.shift();
document.getElementById('array7').innerHTML += arrayCarros;