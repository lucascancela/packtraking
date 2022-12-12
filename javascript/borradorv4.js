var bloques = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var materias = ["mate", "mate", "lengua", "lengua","proy", "proy", "mate", "mate", "lengua", "lengua","proy", "proy", "mate", "mate", "lengua", "lengua","proy", "proy", "mate", "mate", "lengua", "lengua","proy", "proy", "mate", "mate", "lengua", "lengua","proy", "proy"];

var profeLengua = [
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [1,1,1,1,1,1], 
    [1,1,1,1,1,1], 
    [1,1,1,1,1,1],
    ];

var profeMate = [
    [0,0,0,0,0,0], 
    [0,0,0,0,1,1],
    [1,1,1,1,1,1], 
    [1,1,1,1,1,1], 
    [1,1,1,1,1,1],
    ];

var profeProy = [
    [1,1,1,1,1,1], 
    [1,1,1,1,1,1], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profe = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profe = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profe = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];
    
var profe = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profe = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profe = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profe = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

const INF = 1e9;
var horarioFinal = [];

function solve(horarios, materias){
        for (let i = 0; materias.length > 0; i++) { 
            for (let h = 0; h < 5; h++) {

            if(horarios[h][i]==0){
                for (let j = 0; j < materias.length; j++) {
                    if(materias[j]=="mate" && profeMate[h][i]==1 || materias[j]=="proy" && profeProy[h][i]==1 || materias[j]=="lengua" && profeLengua[h][i]==1){
                        horarios[h][i] = materias[j];
                        let nuevasMaterias = [...materias];
                        nuevasMaterias.splice(j,1);

                        if(materias[j]=="mate"){
                            profeMate[h][i]==0;
                        }else if(materias[j]=="proy"){
                            profeProy[h][i]==0;
                        }else if(materias[j]=="lengua"){
                            profeLengua[h][i]==0;
                        }
                        
                        // if(horarios[j]!=0 && materias.length==0){
                        //     return true;
                        // }
                        
                        for (let k = 0; k < horarios.length; k++) {
                            if(horarios[h][k]==0){
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
                            profeMate[h][i]==1;
                        }else if(materias[j]=="proy"){
                            profeProy[h][i]==1;
                        }else if(materias[j]=="lengua"){
                            profeLengua[h][i]==1;
                        }

                        break;
                    }
                }
            }
        }
    }
}

console.log(solve(bloques, materias));
console.log(horarioFinal)

