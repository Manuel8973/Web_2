function sumarPropiedad(arr, propiedad) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        let valor = arr[i][propiedad];
        if (valor !== undefined) {
            suma += valor;
        }
    }
    return suma;
}

let objetos = [
    { valor: 10 }, 
    { valor: 20 }, 
    { valor: 30 }
];

console.log("La suma es:")
console.log(sumarPropiedad(objetos, "valor")); 
