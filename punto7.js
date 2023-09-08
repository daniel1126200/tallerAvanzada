let numeros = []

let generarNumeros=()=>{
    for(let i=0 ; i <= 9; i++){
        let num = Math.floor((Math.random() * (200)));
        numeros.push(num)
    }
    //console.log(numeros)
    // return numeros
}

let numCercano=()=>{
    let menor =(Math.min(...numeros));
    console.log(`Numero mas cercano a cero: ${menor}`);
}

generarNumeros()
numCercano()