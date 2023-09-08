let calcularTemp = (minDia1,maxDia1,minDia2,maxDia2) => {
    let mediaD1 = (minDia1 + maxDia1) /2 
    let mediaD2 = (minDia2 + maxDia2) /2
    let media= (mediaD1+ mediaD2) /2

    return media
}

console.log(calcularTemp(8,22,11,26))

