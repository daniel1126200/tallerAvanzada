let salario = 3500000
let comision = 1500000
let deduccion = 0

let salarioMensual = (numVentas) => {
    let comVentas = comision * numVentas
    salario = salario + comVentas 
    deduccion = (comVentas * 5)/100
    salario = salario - deduccion

    return(`El salario mensual de este mes con ${numVentas} ventas es de: $${salario}`);
}

console.log(salarioMensual(3));
