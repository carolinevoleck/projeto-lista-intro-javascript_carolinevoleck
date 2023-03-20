// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
 function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    let height = prompt("Digite uma altura para o retângulo");
    let width = prompt("Digite uma largura para o retângulo");
    let areaValue = height * width
      console.log(areaValue)
}
calculaAreaRetangulo() 

// EXERCÍCIO 02
 function imprimeIdade() {
  // implemente sua lógica aqui
  let currentYear = prompt("Digite o ano atual");
  let birthYear = prompt("Digite o ano em que nasceu");
  let age = currentYear - birthYear
    console.log(age)
}
imprimeIdade() 

// EXERCÍCIO 03
 function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let kilo = peso;
  let metros = altura;
  let result = kilo / (metros*metros);
    return result
}
calculaIMC()
 
// EXERCÍCIO 04
 function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const myName = prompt("Digite seu nome");
  const myAge = prompt("Digite sua idade");
  const myEmail = prompt("Digite seu email");
  console.log(`Meu nome é ${myName}, tenho ${myAge} anos, e o meu email é ${myEmail}.`);
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
 function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const colorsOne = prompt("Digite sua cor favorita");
  const colorsTwo = prompt("Digite sua cor favorita");
  const colorsThree = prompt("Digite sua cor favorita");
    console.log([colorsOne, colorsTwo, colorsThree]);
}
imprimeTresCoresFavoritas() 

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toLocaleUpperCase()
}
retornaStringEmMaiuscula()
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 return custo / valorIngresso
}
calculaIngressosEspetaculo()
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}
checaStringsMesmoTamanho(tomatea, cebola)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}
retornaPrimeiroElemento()
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}
retornaUltimoElemento()
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];
  const ultimoElemento = array[array.length - 1];
  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;
  return array;
}
trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}
checaIgualdadeDesconsiderandoCase()
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = parseInt(prompt("Digite o ano atual:"));
  const anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
  const anoEmissaoRG = parseInt(prompt("Digite o ano de emissão da carteira de identidade:"));

  const idade = anoAtual - anoNascimento;
  const tempoDesdeEmissao = anoAtual - anoEmissaoRG;

  if (idade <= 20 || idade === 20) {
    console.log(tempoDesdeEmissao >= 5);
  } else if (idade > 20 && idade < 50 || idade === 50) {
    console.log(tempoDesdeEmissao >= 10);
  } else {
    console.log(tempoDesdeEmissao >= 15);
  }
}
checaRenovacaoRG()
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
checaAnoBissexto()
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const pergunta1 = prompt("Você tem mais de 18 anos? (sim ou nao)").toLowerCase();
  const pergunta2 = prompt("Você possui ensino médio completo? (sim ou nao)").toLowerCase();
  const pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou nao)").toLowerCase();

  if (pergunta1 === "sim" && pergunta2 === "sim" && pergunta3 === "sim") {
    console.log(true);
  } else {
    console.log(false);
  }
}
checaValidadeInscricaoLabenu()