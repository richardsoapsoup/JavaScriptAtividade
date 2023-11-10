function removerCaractere(palavra, posicao){
    let removido = ""
    
    
    
    removido += palavra[posicao]
    let palavraNova = palavra.substr(0, posicao)    
    let palavraNova2 = palavra.substr(posicao + 1, palavra.lenght)
    let modificado = palavraNova + palavraNova2
    
    console.log(`Caractere removido: ${removido}`)
    console.log(`Palavra modificada: ${modificado}`)

    


}

removerCaractere("melancia", 4)