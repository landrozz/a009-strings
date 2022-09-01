const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringSemEspaco = minhaString.trim()
const minhaStringCompleta = minhaStringSemEspaco.replace("________","sticioso")

console.log(`A minha string tinha ${minhaString.length} caracteres antes de remover os espacos. Agora ela tem ${minhaStringSemEspaco.length} caracteres`)
//outra possibilidade: console.log(`A minha string tinha ${minhaString.length} caracteres antes de remover os espacos. Agora ela tem ${minhaString.trim().length} caracteres`)

console.log(minhaStringCompleta)
// outra possibilidade: console.log(minhaString.trim().replace("________","sticioso"))