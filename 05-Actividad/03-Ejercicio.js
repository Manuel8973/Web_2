function invertirNumero(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}


console.log(invertirNumero(12345)); 