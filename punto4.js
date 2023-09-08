let sables = [3,7,-2,9,-4,3,-5,10,4,1]
let defectuosos = 0


sables.forEach(function(sable){
    if (sable < 0){
        defectuosos = defectuosos +1
    }
})
console.log(`Cantidad de sables defectuoso: ${defectuosos}`);
