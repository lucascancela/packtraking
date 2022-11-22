var bloques = [0,0,0,0,0,0];

var materias = ["mate", "mate", "lengua", "lengua","proy", "proy"];

var profeMate =   [0,0,1,1,1,0];
var profeLengua = [1,1,0,0,0,0]; 
var profeProy =   [0,0,0,1,1,1];

function solve(horarios, materias){
    let num=0;
    for (let i = 0; materias.length > 0; i++) { 
        if(horarios[i]==0){
            for (let j = 0; j < materias.length; j++) {
                if(materias[j]=="mate" && profeMate[i]==1 || materias[j]=="proy" && profeProy[i]==1 || materias[j]=="lengua" && profeLengua[i]==1){
                    horarios[i] = materias[j];
                    let nuevasMaterias = [...materias];
                    nuevasMaterias.splice(j,1);

                    //poner el profe q haya agarrado en su horario = 0
                    
                    // Si horarios y materias ya estan cumplidos los dos, reutrn true
                    // ...

                    if(solve(horarios,nuevasMaterias)){
                        return true;
                    }
                    //poner el profe q haya agarrado en su horario = 1
                    
                    break;
                }
            }
            //   solve(horarios,materias);
        }
    }
}

solve(bloques, materias);