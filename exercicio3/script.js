//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair."`
const fraseTrocada = frase.replaceAll("verde","rosa").replaceAll("azul","laranja")
const fraseTrocadaMaiuscula = fraseTrocada.replace("mas não deixe o gato sair", "MAS NAO DEIXE O GATO SAIR")

console.log(frase)
console.log(fraseTrocada)
console.log(`A segunda string inclui a palavra "verde"? - ${fraseTrocada.includes("verde")}
A segunda string inclui a palavra "laranja"? - ${fraseTrocada.includes("laranja")}`)
console.log(fraseTrocadaMaiuscula)