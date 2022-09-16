var bloques = [ 
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
]
    
//dia = fila 
function solve(horarios){
    let nuevoHorarios = [...horarios];
    nuevoHorarios.forEach(dia => {
    });

    bloques_invertido = invertir(nuevoHorarios);
        //ver video del negro de backtracking
    bloques_invertido.forEach(columna => {
         
    });
}
solve(bloques);
function invertir(bloques){
    lista_bloques = [];
    for (let i = 0; i < 6; i++) {
        bloque = [];
        for (let x = 0; x < bloques.length; x++) {
            if(bloques[x][i]>0){
            bloque.push(bloques[x][i])

            }else{
                bloque.push(0);
            }
        }
        lista_bloques.push(bloque);
        
    }
    return lista_bloques;
}

console.log(invertir(bloques));