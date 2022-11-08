var bloques = [0,0,0,0,0,0];

var materias = ["mate", "mate", "lengua", "lengua","proy", "proy"];

var profeMate =   [1,0,1,1,0,0];
var profeLengua = [0,1,0,1,1,1]; 
var profeProy =   [1,1,1,0,0,1];

function solve(horarios, materias){
    for (let i = 0; i < materias.length; i++) { //REVISAR EL I++ VER BORRADORV5 COMO HICE
        if(horarios[i]==0){
            //if() se puede poner la materia segun el horario del profe
            horarios[i] = materias[0];
            materias.splice(0,1);
            horarios
        }
    }
}

solve(bloques, materias);