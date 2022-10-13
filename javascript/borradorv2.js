var bloques = [ 
    [1,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,3,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,5,0],
]
var valor=1;
var materias = ["lengua"]
console.log("hola")
//dia = fila 
function solve(horarios, valor){
  //  let nuevoHorarios2 = [...nuevoHorarios];

    // nuevoHorarios.forEach(dia => {
    // });
    
    // bloques_invertido = invertir(nuevoHorarios);
    //     //ver video del negro de backtracking
    // bloques_invertido.forEach(columna => {
        // });
        
    console.log(horarios[2][3]) //jugar con esto
    valor
    for (let i = 0; i < 5; i++) {
        let newValor;
        newValor = valor;

        for (let j = 0; j < 6;j++) {
            if(horarios[i][j] == 0){
            horarios[i][j] = newValor
            newValor
            solve(horarios, valor++);
            }
            newValor++
        }
        
        console.log(horarios)
        
    }
    
}
solve(bloques, 1);

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