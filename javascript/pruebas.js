var espacio = 50;
var lista = [30,10,45,25];
const limite = 50;
const INF = 1e9;

function SS(peso, elementos){

    if(limite - peso < 0)
        return -INF;

    let max = peso;
    elementos.forEach(e => {
        let nuevoElementos = elementos;
        let nuevoPeso = peso + e;
        nuevoElementos.splice(nuevoElementos.indexOf(e), 1);
        console.log(nuevoElementos);
        
        let sol = SS(nuevoPeso, nuevoElementos);
        
        if(sol > max){
            console.log("Old max: " + max);
            max = sol;
            console.log("New max: " + max);

        }
    });

    return max;
}

console.log(SS(0, lista));


