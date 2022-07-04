var espacio = 50;
var lista = [30,10,45,25,19];
const limite = 50;
const INF = 1e9;
console.time();
function SS(peso, elementos){

    console.log("--------------------------");
    console.log("Peso: " + peso);
    console.log("Elementos: " + elementos);

    if(limite - peso < 0){
        console.log("El peso se excedió");
        return -INF;
    }

    if(elementos.length == 0){
        return peso;
    }

    let max = 0;

    elementos.forEach(e => {
        let nuevoElementos = [...elementos];
        let nuevoPeso = peso + e;
        nuevoElementos.splice(nuevoElementos.indexOf(e), 1);
        
        console.log(e + " en la mochila");
        const sol1 = SS(nuevoPeso, nuevoElementos);
        console.log(e + " NO en la mochila");
        const sol2 = SS(peso, nuevoElementos);

        console.log("Comparing " + sol1 + ", " + sol2);

        let sol = Math.max(sol1, sol2);
        
        if(sol > max){
            //console.log("Old max: " + max);
            max = sol;
            //console.log("New max: " + max);

        }
    });

    return max;
}

console.log(SS(0, lista));
console.timeEnd();
