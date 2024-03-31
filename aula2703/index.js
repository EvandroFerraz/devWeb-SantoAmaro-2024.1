// javascript é uma linguagem de tipagem dinamica
/*let a = 2;
let b = 3;
let soma = a + b;

var c = 3;
var d = 5;
var multiplicacao = c * d;

var linguagem = "Javascript";
console.log("Aprendendo " + linguagem);
console.log("Soma de A e B: " + soma);
console.log("Multiplicacao de C e D " + multiplicacao);

var idade = 18;
if (idade >= 18) {
  var nome = "João";
  console.log("Parabéns " + nome + ", você pode dirigir");
}
console.log("Até mais " + nome)*/

/*const n1 = 2;
const n2 = "3";
const n3 = n1 + n2; // coerção implicita = concatenacao
console.log(n3);
const n4 = n1 + Number(n2);
console.log(n4); // coerção explicita

console.log(1 == 1); //true
console.log(1 == "1") //true
console.log(1 === 1) //true
console.log(1 === '1') //false*/

/*v1 = [];
v1[0] = 3.4;
v1[10] = 2;
v1[2] = "abc";

// v1 possui 11 elementos
console.log(v1.length);

v2 = [2, "abc", true];
console.log(v2)

for(let i = 0; i < v2.length; i++){ // i = i + 1
    console.log(v2[i])
}*/

/*const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];

// Filtra os nomes do vetor retornando somente os que
// começam com a letra A
const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);

// Filtra os nomes pegando apenas a primeira letra
// (character no indice 0) de cada nome.
const res = nomes.map((nome) => nome.charAt(0));
console.log(res);

const todosComecamComA = nomes.every((n) => n.startsWith("A"));
console.log(todosComecamComA);

const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac,v) => ac + v)
console.log(soma)
const fatorial = valores.reduce((ac,v) => ac * v)
console.log(fatorial)*/

/*function hello(){
    console.log("Oi")
}*/
/*function hello(nome) {
  console.log("Oi, " + nome);
}
//hello()
hello("Evandro");

function soma(a, b) {
  return a + b;
}
console.log("A soma é: " + soma(5, 7));

const dobro = function (n) {
  return n * 2;
};

const res = dobro(4);
console.log(res);

const triplo = function (n = 5) {
  return n * 3;
};

console.log(triplo());
console.log(triplo(3));*/

const ehPar = (n) => {
  return n % 2 === 0
}
console.log(ehPar(10))
console.log(ehPar(9))

let pessoa = {
  nome: "João",
  idade: 17,
};

console.log("Meu nome é " + pessoa.nome);
console.log("Tenho " + pessoa["idade"] + " anos.");

let pessoaComEndereco = {
  nome: "Maria",
  idade: 21,
  endereco: {
    logradouro: "Rua B",
    numero: 121,
  },
};
console.log("Nome: " + pessoaComEndereco.nome);
console.log("Idade: " + pessoaComEndereco.idade);
console.log("Moro na Rua: " + pessoaComEndereco.endereco["logradouro"]);
console.log(
  "O numero da minha casa é " + pessoaComEndereco["endereco"]["numero"]
);

let concessionaria = {
  cnpj: "00011122210001-45",
  endereco: {
    logradouro: "Rua A",
    numero: 10,
    bairro: "Vila J",
  },
  veiculos: [
    {
      marca: "Ford",
      modelo: "Ecosport",
      anoDeFabricacao: 2018,
    },
    {
      marca: "Chevrolet",
      modelo: "Onix",
      anoDeFabricacao: 2020,
    },
    {
      marca: "Volkswagem",
      modelo: "Nivus",
      anoDeFabricacao: 2020,
    },
  ],
};

console.log(concessionaria.cnpj);
console.log(concessionaria.endereco["logradouro"]);

for (let i of concessionaria.veiculos) {
  console.log("===========");
  console.log("Marca: " + i.marca);
  console.log("Modelo: " + i.modelo);
  console.log("Ano: " + i.anoDeFabricacao);
}
