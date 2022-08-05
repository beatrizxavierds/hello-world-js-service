function somar(numeroA, numeroB) {
  let resultado = numeroA + numeroB;
  return resultado;
}

function subtrair(numeroA, numeroB) {
  let resultado = numeroA - numeroB;
  return resultado;
}

function dividir(numeroA, numeroB) {
  //verificar se numeroB é = a zero
  if (numeroB === 0) {
    //se for zero, retornar um erro
    return "Erro";
  }

  //se for diferente de zero, fazer o cálculo
  let resultado = numeroA / numeroB;
  return resultado;
}

// function dividir2(numeroA, numeroB) {
//   //verificar se numeroB é diferente de zero
//   if (numeroB != 0) {
//     //se for diferente de zero, fazer o cálculo
//     let resultado = numeroA / numeroB;
//     return resultado;
//   }
//   //se for zero, retornar um erro
//   return "Erro";
//}
module.exports = { somar, subtrair, dividir };
