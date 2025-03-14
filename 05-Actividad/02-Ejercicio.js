function palabraMasLarga(frase) {
    let palabras = frase.split(" ");
    return palabras.reduce((max, palabra) => palabra.length > max.length ? palabra : max, "");
}


console.log(palabraMasLarga("Hoy es un hermoso día soleado")); 
