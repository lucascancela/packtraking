var lista = [ 
    [3, 0, 6, 5, 0, 8, 4, 0, 0], 
    [5, 2, 0, 0, 0, 0, 0, 0, 0], 
    [0, 8, 7, 0, 0, 0, 0, 3, 1], 
    [0, 0, 3, 0, 1, 0, 0, 8, 0], 
    [9, 0, 0, 8, 6, 3, 0, 0, 5], 
    [0, 5, 0, 0, 9, 0, 6, 0, 0], 
    [1, 3, 0, 0, 0, 0, 2, 5, 0], 
    [0, 0, 0, 0, 0, 0, 0, 7, 4], 
    [0, 0, 5, 2, 0, 6, 3, 0, 0] 
]


function res (sudoku) {
    let nuevoSudoku = [...sudoku];

    nuevoSudoku.forEach(fila => {
        // let i = 0;
        // fila.forEach(e => {
        //     if(e==0){
        //         i++;
        //         a=fila.indexOf(e);  
        //         fila[a]=i;

        //     }
        // });

        
        fila_sin_cero(fila);
        repetidos(fila);
    });
    console.log(columnas(nuevoSudoku)[0]);
    console.log(repetidos(columnas(nuevoSudoku)[0]));
}
res(lista);

function fila_sin_cero(fila){
    if (fila.includes(0)) {
        return true
    }else {
        return false
    }
}

function repetidos(fila){
    const lista = [...fila].sort();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i + 1] === lista[i]) {
            return false; // no es solucion porq hay repetida        
        }else{
            return true;
        }
    }
}

function columnas(sudoku){
    lista_columnas = [];
    for (let i = 0; i < sudoku.length; i++) {
        columna = [];
        for (let x = 0; x < sudoku.length; x++) {
            columna.push(sudoku[x][i]);   
            
        }
        lista_columnas.push(columna);
        return lista_columnas;
    }
}
// function solucion(sudoku){
//     sudoku.forEach(fila => {
//         let i = 0;
//         fila.forEach(e => {
//             if(fila[e] == 0){
//                 console.log("lugar vacio ");
//                 return false;

//                 }else{
//                     return true;
//                 }
//         });            
//     });
// }
