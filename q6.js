function calcularMedia(n1 , n2){
    if (n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10){
        console.log((n1 + n2) / 2)
    } if (n1 < 0 || n1 > 10){
        console.log(`Valor invalido = ${n1}`)
    } if (n2 < 0 || n2 > 10){
        console.log(`Valor invalido = ${n2}`)

    }
}
calcularMedia(8, 7)
calcularMedia(-1, 2)
calcularMedia(-3, 13)