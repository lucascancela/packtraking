var bloques = [0,0,0,0,0,0];

var materias = ["mate", "mate", "lengua", "lengua","proy", "proy"];

var profeMate =   [1,1,1,1,1,1];
var profeLengua = [1,1,1,1,1,1]; 
var profeProy =   [1,1,1,1,1,1];

function solve(horarios, materias){
    let num=0;
    for (let i = 0; materias.length > 0; i++) { //REVISAR EL I++ VER BORRADORV5 COMO HICE
        horarios
        if(horarios[i]==0){
            console.log(materias[0])
            console.log(profeMate[i])
            materias

            for (let j = 0; j <= materias.length; j++) {
                if(materias[j]=="mate" && profeMate[i]==1 || materias[j]=="proy" && profeProy[i]==1 || materias[j]=="lengua" && profeLengua[i]==1){
                    //   solve(horarios,materias);
                    horarios[i] = materias[j];
                    materias.splice(j,1);
                    break;
                }
            }
            
          //  horarios[i] = materias[0];
            //   solve(horarios,materias);
        }
    }
}

solve(bloques, materias);