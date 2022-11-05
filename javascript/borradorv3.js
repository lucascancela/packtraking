// https://lisperator.net/blog/javascript-sudoku-solver/
console.log("hola")

var bloques = [ 
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
]

var valor=1;
var materias = ["lengua"]
//dia = fila 
function solve(horarios, valor){        
    console.log(horarios[2][3]) //jugar con esto
    valor
    for (let i = 0; i < 5; i++) {
        let newValor;
        newValor = valor;

        for (let j = 0; j < 6;j++) {
            if(horarios[i][j] == 0){ // aca tengo q poner las condiciones para ver si se pone algo ahi o se saltea
            
            //qeu se reemplaze le lugar por un numero, sino q siga al else

            //horarios[i][j] = newValor
           // solve(horarios, valor);
            }else{
                //que vuelva uno atras y le sume uno al numero de atras solo si no estaba ocupado antes por un numero puesto de base
                //revisar lo de arriba porque no es sudoku, es horarios
            }
            //   if horarios is a solution

            
           // newValor++
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
