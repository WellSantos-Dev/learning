converter = (sorf, number) => {
    sorf;
    number;

    if(sorf === 'f'){
        celsius = (number - 32) * 5/9;
        console.log(celsius)
    } else if(sorf === 'c'){
        farenreit = number * 9/5 + 32;
        console.log(farenreit)
    }
    
}

converter('c', 70)