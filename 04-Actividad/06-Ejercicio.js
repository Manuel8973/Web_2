function numeroMasRepetido(arr) {
    let conteo = {};
    let maxNum = arr[0], maxFrecuencia = 0;

    arr.forEach(num => {
        conteo[num] = (conteo[num] || 0) + 1;
        if (conteo[num] > maxFrecuencia) {
            maxFrecuencia = conteo[num];
            maxNum = num;
        }
    });

    return maxNum;
}


console.log(numeroMasRepetido([1, 3, 3, 2, 1, 3, 4, 4, 4, 4])); 