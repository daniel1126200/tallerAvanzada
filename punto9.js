// DECLARAR LA FUNCIÓN PRINCIPAL
let crearPadwan = (nombre, planeta, edad, estatura, clasPadwan)=>{
    setTimeout(function(){
        // Logica de la función principal
        let padawan = { // Armamos un objeto con los datos
            nombreEstudiante: nombre,
            planetaEstudiante: planeta,
            edadEstudiante: edad,
            estaturaEstudiante: estatura
        }
        clasPadwan(padawan)
    },2000)
}

crearPadwan("Padawan","asda",16,140,function(padawan){
    if(padawan.edadEstudiante < 15){
        console.log(`${padawan.nombreEstudiante}, tienes ${padawan.edadEstudiante} años, por lo que vas a la clase de manejo de la fuerza`)
    }else{
        console.log(`${padawan.nombreEstudiante}, tienes ${padawan.edadEstudiante} años, por lo que vas a la clase de manejo de sable de luz`)
    }
})