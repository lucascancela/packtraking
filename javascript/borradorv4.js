var bloques = [0,0,0,0,0,0];

var materias = ["mate", "mate", "lengua", "lengua","proy", "proy"];

var profeMate =   [0,0,1,1,1,0];
var profeLengua = [1,1,0,0,0,0]; 
var profeProy =   [0,0,0,1,1,1];

const INF = 1e9;

var horarioFinal = [];

function solve(horarios, materias){
    let num=0;
    for (let i = 0; materias.length > 0; i++) { 
        if(horarios[i]==0){
            for (let j = 0; j < materias.length; j++) {
                if(materias[j]=="mate" && profeMate[i]==1 || materias[j]=="proy" && profeProy[i]==1 || materias[j]=="lengua" && profeLengua[i]==1){
                    horarios[i] = materias[j];
                    let nuevasMaterias = [...materias];
                    nuevasMaterias.splice(j,1);

                    if(materias[j]=="mate"){
                        profeMate[i]==0;
                    }else if(materias[j]=="proy"){
                        profeProy[i]==0;
                    }else if(materias[j]=="lengua"){
                        profeLengua[i]==0;
                    }
                     
                    // if(horarios[j]!=0 && materias.length==0){
                    //     return true;
                    // }
                    
                    for (let k = 0; k < horarios.length; k++) {
                        if(horarios[k]==0){
                            horarios==INF;
                        }
                    }
                    if(nuevasMaterias.length==0 && horarios!=INF){
                        if(horarioFinal.length==0){
                            horarioFinal = horarios
                        }
                        return true;
                    }
                    

                    if(solve(horarios,nuevasMaterias)){
                        if(horarioFinal.length==0){
                            horarioFinal = horarios
                        }
                        return true;
                    }
                    
                    solve(horarios,nuevasMaterias);
                    
                    if(materias[j]=="mate"){
                        profeMate[i]==1;
                    }else if(materias[j]=="proy"){
                        profeProy[i]==1;
                    }else if(materias[j]=="lengua"){
                        profeLengua[i]==1;
                    }

                    break;
                }
            }
        }
    }
}

console.log(solve(bloques, materias));
console.log(horarioFinal)

