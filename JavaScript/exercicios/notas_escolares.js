notasEscolares = (notas) => {
    if(notas >= 90){
        console.log("Parabéns! Recebeu A");
    } else if(notas >= 80) {
        console.log("Muito bem, recebeu B");
    } else if(notas >= 70){
        console.log("Ok, recebeu C");
    } else if(notas >= 60){
        console.log("Atenção nas aulas! Recebeu D");
    } else if(notas <= 60){
        console.log("Estude mais, recebeu F")
    }
}

notasEscolares(87)