let planetas = [
    {
        nombre: "Namek",
        latitud: 180.5,
        longitud: 19.10,
        nivelOxigeno: 0.08, 
        volAgua: 0.09, 
    },
    {
        nombre: "Tierra",
        latitud: 80.5,
        longitud: 109.10,
        nivelOxigeno: 0.21, // 21% = 21/100 = 0.21
        volAgua: 0.73,
    },
    {
        nombre: "bsae",
        latitud: 80.5,
        longitud: 19.30,
        nivelOxigeno: 0.31, // 21% = 21/100 = 0.21
        volAgua: 1,
    },
    {
        nombre: "Jupiter",
        latitud: 90.5,
        longitud: 10.10,
        nivelOxigeno: 1, // 21% = 21/100 = 0.21
        volAgua: 0.02,
    },
    {
        nombre: "Tisasferra",
        latitud: 80.5,
        longitud: 92.40,
        nivelOxigeno: 0.15, // 21% = 21/100 = 0.21
        volAgua: 0.09,
    },
    {
        nombre: "asdss",
        latitud: 80,
        longitud: 70,
        nivelOxigeno: 0.99, // 21% = 21/100 = 0.21
        volAgua: 0.01,
    },
    {
        nombre: "12",
        latitud: 30.2,
        longitud: 4.09,
        nivelOxigeno: 1, // 21% = 21/100 = 0.21
        volAgua: 1,
    },
    {
        nombre: "test",
        latitud: 75.5,
        longitud: 109.10,
        nivelOxigeno: -0.8, // 21% = 21/100 = 0.21
        volAgua: 0.3,
    },
    {
        nombre: "yn5r",
        latitud: 21.9,
        longitud: 120,
        nivelOxigeno: 0.15, // 21% = 21/100 = 0.21
        volAgua: 0,
    },
    {
        nombre: "sa",
        latitud: 100.5,
        longitud: 21.60,
        nivelOxigeno: 0.56, // 21% = 21/100 = 0.21
        volAgua: 0.90,
    },
    {
        nombre: "asfasd",
        latitud: 20.5,
        longitud: 69.20,
        nivelOxigeno: 0.17, // 21% = 21/100 = 0.21
        volAgua: 0.07,
    },
    {
        nombre: "afsa",
        latitud: 86.5,
        longitud: 12.10,
        nivelOxigeno: 1, // 21% = 21/100 = 0.21
        volAgua: 0.09,
    },
    {
        nombre: "23",
        latitud: 89,
        longitud: 19.80,
        nivelOxigeno: 0.21, // 21% = 21/100 = 0.21
        volAgua: 0.88,
    },
    {
        nombre: "adg",
        latitud: 82.7,
        longitud: 105.20,
        nivelOxigeno: 0.27, // 21% = 21/100 = 0.21
        volAgua: 0.09,
    },
    {
        nombre: "asf",
        latitud: 70.2,
        longitud: 30.70,
        nivelOxigeno: 0.12, // 21% = 21/100 = 0.21
        volAgua: 0.5,
    },
]

// PREPARANDO LAS ENTRADAS
//let planetas=Array(planeta1, planeta2)

let analizarPlanetas = (planetas)=>{
    // Recorrrer un arreglo

    //VOLUMEN AGUA
    let agua=planetas.map(function(planeta){
        return (planeta.volAgua)
    })

    let totalAgua=0
    agua.forEach(function(volAgua){
        totalAgua = totalAgua+volAgua
    })
    

    //NIVEL OXIGENO
    let oxigeno=planetas.map(function(planeta){
        return (planeta.nivelOxigeno)
    })

    let totalOxigeno=0
    oxigeno.forEach(function(nivelOxigeno){
        totalOxigeno = totalOxigeno+nivelOxigeno
    })
    totalOxigeno= Math.floor(totalOxigeno*100)


    //OXIGENO NEGATIVO
    const oxigenoNegativo = planetas.find(function(planeta){
        return(planeta.nivelOxigeno < 0 )
    })

    console.log("Informacion planeta sin oxigeno:");
    console.log(oxigenoNegativo);


    //PLANETA SIN AGUA
    let noAgua = planetas.find(function(planeta){
        return(planeta.volAgua === 0 )
    })
    console.log("Informacion planeta sin agua:");
    console.log(noAgua);
    
    
    
    return (`Total agua de todos los planetas: ${totalAgua} \nSuma oxigeno de todos los planetas * 100: ${totalOxigeno}`)
}

console.log(analizarPlanetas(planetas));


