const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    printText()
    return "resultado: " + (segundo + terceiro)
}

function printText(){
    console.log("printando algo")
}

//function somarComParametros(n1, n2, n3){
//    return n1 + n2 + n3
//}

const somarComParametros = (n1,n2,n3) => n1 + n2 + n3
    

console.log(somarComParametros(1,2,3))

const teste = () => "qualquer coisa"
console.log(teste())