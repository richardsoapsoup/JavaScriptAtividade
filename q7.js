function diaDaSemana(dia){
    switch (dia){
        case 'SEGUNDA':
            console.log("É segunda")
            break

       case 'TERÇA':
            console.log("É terça")
            break   
            
        default:
            console.log("Foi mal só existe segunda e terça por que o programador tava com preguiça")
            break    
    }
}
diaDaSemana("SEGUNDA")
diaDaSemana("Quarta")