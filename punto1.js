
let distanciaCalculada = (coordenadaXPlanetaUno,coordenadaYPlanetaUno,coordenadaXPlanetaDos,coordenadaYPlanetaDos) => Math.sqrt(Math.pow(coordenadaXPlanetaDos - coordenadaXPlanetaUno , 2) + Math.pow(coordenadaYPlanetaDos - coordenadaYPlanetaUno , 2))


console.log(`La distancia calculada es ${distanciaCalculada(10,-50,80,0)}`);


