function formatNumber(n) {
    return Number.isInteger(n) ? n : n.toFixed(2);
  }
  
  function calcular(id1, id2, idResp, operador) {
    const n1 = parseFloat(document.getElementById(id1).value);
    const n2 = parseFloat(document.getElementById(id2).value);
    let res;
  
    if (isNaN(n1) || isNaN(n2)) {
      res = "Digite dois números válidos.";
    } else {
      switch (operador) {
        case "+":
          res = n1 + n2;
          break;
        case "-":
          res = n1 - n2;
          break;
        case "*":
          res = n1 * n2;
          break;
        case "/":
          res = n2 === 0 ? "Erro: divisão por zero." : n1 / n2;
          break;
      }
    }
  
    document.getElementById(idResp).textContent =
      typeof res === "number" ? `Resultado: ${formatNumber(res)}` : res;
  }
  
  function calcularBhaskara() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    let resp = document.getElementById("respBhaskara");
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resp.textContent = "Preencha todos os coeficientes.";
      return;
    }
  
    if (a === 0) {
      resp.textContent = "O coeficiente 'a' não pode ser zero.";
      return;
    }
  
    const delta = b * b - 4 * a * c;
  
    if (delta < 0) {
      resp.textContent = `Delta = ${formatNumber(delta)} ➜ Não há raízes reais.`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      resp.textContent = `Delta = ${formatNumber(delta)} ➜ x₁ = ${formatNumber(x1)}, x₂ = ${formatNumber(x2)}`;
    }
  }
  