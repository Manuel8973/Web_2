function contarParesImpares(arr) {
    let resultado = { pares: 0, impares: 0 };
    arr.forEach(num => {
        if (num % 2 === 0) resultado.pares++;
        else resultado.impares++;
    });
    return resultado;
}


console.log(contarParesImpares([1, 2, 3, 4, 5, 6]));