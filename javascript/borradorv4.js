var bloques = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var materias = ["mate", "mate", "lengua", "lengua","proy", "proy", "quimica", "quimica", ]
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

var profeQuimica = [
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
                    if(materias[j]=="mate" && profeMate[h][i]==1 || materias[j]=="proy" && profeProy[h][i]==1 || materias[j]=="lengua" && profeLengua[h][i]==1 || materias[j]=="quimica" && profeQuimica[h][i]==1 ){
                        // agregar cada profesor ahi arruiba con el || y eso
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
                        //hacer los horarios en 0 de todos los profes nuevos



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
                        // hacer los horaris en 1 de todos los profes nuevos q agrego

                        break;
                    }
                }
            }
        }
    }
}

console.log(solve(bloques, materias));
console.log(horarioFinal)

