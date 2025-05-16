const nomeOriginal = "    Simba  "
const nomeOriginal2 = "  aNtonIo Julio "
const nomeOriginal3 = "LARA   "

const dog = {

    nomeFormatado: nomeOriginal.trim(),

    nomeFormatado2: nomeOriginal2.trim().slice(0, 1).toUpperCase() + nomeOriginal2.slice(3, 9).toLowerCase() +  
    nomeOriginal2.slice(10, 11).toUpperCase() + nomeOriginal2.slice(11, 16).toLowerCase().trim(),
    
    nomeFormatado3: nomeOriginal3.slice(0, 1).toUpperCase() + nomeOriginal3.slice(1).toLowerCase().trim()

}

console.log(` ${ nomeOriginal } - ${ nomeOriginal2 } - ${ nomeOriginal3 } `)
console.table(dog)
console.log(dog.nomeFormatado2.includes("Antonio Julio"))






