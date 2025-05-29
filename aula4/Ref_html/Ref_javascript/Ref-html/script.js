function formatNumber(n) {
    return Number.isInteger(n) ? n : n.toFixed(2);
  }
  
  function calc() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const n3 = parseFloat(document.getElementById("num3").value);
    const op = document.getElementById("operador").value;
    const resultado = document.getElementById("resultado");
    let res;
  
    if (op === "bhaskara") {
      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        res = "Preencha os coeficientes a, b e c.";
      } else if (n1 === 0) {
        res = "O coeficiente 'a' não pode ser zero.";
      } else {
        const a = n1, b = n2, c = n3;
        const delta = b * b - 4 * a * c;
  
        if (delta < 0) {
          res = `Delta = ${formatNumber(delta)} ➜ Não há raízes reais.`;
        } else {
          const x1 = (-b + Math.sqrt(delta)) / (2 * a);
          const x2 = (-b - Math.sqrt(delta)) / (2 * a);
          res = `Delta = ${formatNumber(delta)} ➜ x₁ = ${formatNumber(x1)}, x₂ = ${formatNumber(x2)}`;
        }
      }
  
    } else if (op === "√") {
      if (isNaN(n1)) {
        res = "Digite um número válido.";
      } else if (n1 < 0) {
        res = "Erro: raiz de número negativo.";
      } else {
        res = `√${n1} = ${formatNumber(Math.sqrt(n1))}`;
      }
  
    } else {
      if (isNaN(n1) || isNaN(n2)) {
        res = "Digite dois números válidos.";
      } else {
        switch (op) {
          case "+":
            res = `Resultado: ${formatNumber(n1 + n2)}`;
            break;
          case "-":
            res = `Resultado: ${formatNumber(n1 - n2)}`;
            break;
          case "*":
            res = `Resultado: ${formatNumber(n1 * n2)}`;
            break;
          case "/":
            res = n2 === 0 ? "Erro: divisão por zero." : `Resultado: ${formatNumber(n1 / n2)}`;
            break;
          default:
            res = "Operação inválida.";
        }
      }
    }
  
    resultado.textContent = res;
  }
  