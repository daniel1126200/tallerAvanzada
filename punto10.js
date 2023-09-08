let alimentos = [
  {
    nombre: "Brocoli",
    tipo: "Vegetal",
    nivelEnergia: 200
  }
]

//AÑADIR ALIMENTOS 

//GENERAR NOMBRE
let generarNombre=(longitud)=>{
  let chars = "abcdefghijklmnopqrstuvwxyz"
  let charLength = chars.length
  let nombre = ""
  for (let i = 0; i< longitud; i++){
    nombre += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return nombre
}

//AÑADIR TIPO ALIMENTO
let generarAliemento=()=>{
  let tipos = ["Animal", "Vegetal", "Insecto"]
  let num = Math.floor((Math.random() * (3)));
  return tipos[num]
} 


//AÑADIR NIVEL ENERGIA
let generarNumero=()=>{
  let energia = Math.floor((Math.random() * (500 - 100 +1)+100));
  return energia
} 


for(let i=0; i<= 300;i++){
  let alimento={
    nombre: generarNombre(5),
    tipo: generarAliemento(),
    nivelEnergia: generarNumero()
  }

  alimentos.push(alimento)
}


//OBTENER ALIMENTOS TIPO VEGETAL CON 200 O MAS UNIDADES DE ENERGIA
let principal = (secundaria)=>{
  setTimeout(function(){
    let find = alimentos.filter(function(alimento){
      return (alimento.tipo == "Vegetal" && alimento.nivelEnergia >= 200)
    })
    console.log(`Alimentos tipo Vegetal con mas de 300 unidades de energia:`);
    console.log(find);
    secundaria()
  },5000)
}

principal(function(){
  let find = alimentos.filter(function(alimento){
    return (alimento.tipo == "Vegetal")
  })
  let totalEnergia = 0
    find.forEach(function(nivelEnergia){
      totalEnergia = totalEnergia+nivelEnergia.nivelEnergia
  })
  console.log(`Total de energia entregada por alimentos tipo Vegetal: ${totalEnergia}`);
})
