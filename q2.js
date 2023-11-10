let arquivo = "texto.pdf"
let extensao = ""
let achou = false

for (var i = 0; i < arquivo.length; i++){   

    if (achou == true){
        extensao += arquivo[i]        
    }
    
     if (arquivo[i] == "."){
        achou = true
        
    }
    
}
console.log(extensao)