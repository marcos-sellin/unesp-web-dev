const Carro = {};
Carro.marca = 'brand';
Carro.modelo = 'model';
Carro.ano = '2026';
Carro.cor = 'azul';

document.getElementById('obj1').innerHTML += 
    'marca: ' + Carro.marca +
    ', modelo: ' + Carro.modelo +
    ', ano: ' + Carro.ano +
    ', cor: ' + Carro.cor;

const Carro2 = {
    marca: 'brand',
    modelo: 'model',
    ano: '2027',
    cor: 'vermelho'
};

document.getElementById('obj2').innerHTML += 
    'marca: ' + Carro2.marca +
    ', modelo: ' + Carro2.modelo +
    ', ano: ' + Carro2.ano +
    ', cor: ' + Carro2.cor;

const Carro3 = new Object();
Carro3.marca = 'brand';
Carro3.modelo = 'model';
Carro3.ano = '2028';
Carro3.cor = 'verde';
Carro3.funciona = false;

document.getElementById('obj3').innerHTML += 
    'marca: ' + Carro3.marca +
    ', modelo: ' + Carro3.modelo +
    ', ano: ' + Carro3.ano +
    ', cor: ' + Carro3.cor +
    ', funciona: ' + Carro3.funciona;

delete(Carro3.funciona);
document.getElementById('obj4').innerHTML += 
    'marca: ' + Carro3.marca +
    ', modelo: ' + Carro3.modelo +
    ', ano: ' + Carro3.ano +
    ', cor: ' + Carro3.cor +
    ', funciona: ' + Carro3.funciona;

function ALteraAnoCarro(ObjCarro, Pano) {
    ObjCarro.ano = Pano;
}

ALteraAnoCarro(Carro3, 2020);

document.getElementById('obj5').innerHTML += 
    'marca: ' + Carro3.marca +
    ', modelo: ' + Carro3.modelo +
    ', ano: ' + Carro3.ano +
    ', cor: ' + Carro3.cor +
    ', funciona: ' + Carro3.funciona;

const ArrayObjCarros = [
    {marca: 'brand', modelo: 'model', ano: '2000', cor: 'preto'},
    {marca: 'brand', modelo: 'model', ano: '2001', cor: 'prata'},
    {marca: 'brand', modelo: 'model', ano: '2002', cor: 'branco'}
];

for(let i = 0; i < ArrayObjCarros.length; i++){
    document.getElementById('arrObj').innerHTML += 
    ' <br> marca: ' + ArrayObjCarros[i].marca +
    ', modelo: ' + ArrayObjCarros[i].modelo +
    ', ano: ' + ArrayObjCarros[i].ano +
    ', cor: ' + ArrayObjCarros[i].cor;
}