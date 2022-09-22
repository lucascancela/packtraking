var bloques = [ 
    [1,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,3,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,5,0],
]
    console.log("hola")
//dia = fila 
function solve(horarios){
  //  let nuevoHorarios2 = [...nuevoHorarios];

    // nuevoHorarios.forEach(dia => {
    // });
    
    // bloques_invertido = invertir(nuevoHorarios);
    //     //ver video del negro de backtracking
    // bloques_invertido.forEach(columna => {
        // });
        
   console.log(horarios[2][3]) //jugar con esto

   for (let i = 0; i < 5; i++) {
       let nuevoHorarios2
       let valor=1

        for (let j = 0; j < 6;j++) {
            if(horarios[i][j] == 0){
            horarios[i][j] = valor
            valor
            solve(horarios)
            
            }            
            valor++

        }
        
        console.log(horarios)
        
    }
    
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

//console.log(invertir(bloques));