function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.textContent = numero1 + numero2
    return res
}
function Subtração(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resu")
    res.textContent = numero3 - numero4
    return res
}
function Multiplicação(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resul")
    res.textContent = numero5 * numero6
    return res
}
function Divisão(){
    document.getElementById("n8").style.bolder = "1px solid black"
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("result")
    if(numero8 !== 0){
        res.textContent = (numero7 / numero8).toFixed(1)
    }else{
        res.innerHTML = "Não é permitido divisão por 0"
        document.getElementById("n8").style.border = "2px solid red"
    }
    return res
}
function IMC(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resPeso = document.getElementById("resPeso")
    var msgIMC = document.getElementById("msgIMC")
    var res = (altura*altura) / peso  

    if(isNaN(peso) || isNaN(altura)){
        resposta.textContent = "Digite apenas números"
        document.getElementById("msg").textContent = " "
        return
    }
    var IMC = (peso / (altura * altura)).toFixed(2)
    resposta.innerHTML = IMC

    IMC = parseFloat(IMC)


    if(res >= 40.0){
        resPeso.textContent = res
        msgIMC.textContent = "Obesidade grau III"
    }
    else if(res <= 39.9 && res >= 35.0){
        resPeso.textContent = res
        msgIMC.textContent = "Obesidade grau II"
    }
    else if(res <= 34.9 && res >= 30.0){
        resPeso.textContent = res
        msg.textContent = "Obesidade grau I"
    }
    else if(res <= 29.9 && res >= 25.0){
        resPeso.textContent = res
        msgIMC.textContent = "Sobrepreso"
    }
    else if(res <= 24.9 && res >= 18.6) {
        resPeso.textContent = res
        msgIMC.textContent = "Normal"
    }
    else{
        resPeso.textContent = res
        msgIMC.textContent = "Abaixo do normal"
    }
}

function verif(){
    
    var ano = parseFloat(document.getElementById("ano").value)
    var resIdade = document.getElementById("resIdade")
    var msgIdade = document.getElementById("msgIdade")
    const thisYear = new Date().getFullYear();
    const res = thisYear - ano

    if(isNaN(ano)){
        res.textContent = "Type only number 🚫"
        res.style.color = "red"
        return
    }

    

    if(res >= 18){
    resIdade.textContent = res
    msgIdade.textContent = "Permitida a entrada"
    }else{
    resIdade.textContent = res
    msgIdade.textContent = "Entrada negada"
    }
}


