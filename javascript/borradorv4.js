var bloques = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var materias = ["mate", "mate", "lengua", "lengua","proy", "proy", "quimica", "quimica", "etica", "etica", "hJudia", "hJudia", "cultura", "cultura", "arte", "arte", "ingles", "ingles", "fisica", "fisica","bEnd","bEnd","fEnd","fEnd","gym","gym", "IOT", "IOT","geografia","geografia"]

var profeLengua = [
    [1,1,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profeMate = [
    [0,0,1,1,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profeProy = [
    [0,0,0,0,1,1],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profeQuimica = [
    [0,0,0,0,0,0],
    [1,1,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profeEtica = [
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profeJudia = [
    [0,0,0,0,0,0],
    [0,0,0,0,1,1],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];
    
var profeCultura = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [1,1,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profeArte = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,1,1,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profeIngles = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,1,1], 
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0],
    ];

var profeFisica = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [1,1,0,0,0,0], 
    [0,0,0,0,0,0],
    ];


var profeBackEnd = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,1,1,0,0], 
    [0,0,0,0,0,0],
    ];
    

var profeFrontEnd = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,1,1], 
    [0,0,0,0,0,0],
    ];
    

var profeGym = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [1,1,0,0,0,0],
    ];


var profeIOT = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,1,1,0,0],
    ];


var profeGeografia = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0], 
    [0,0,0,0,0,0], 
    [0,0,0,0,1,1],
    ];
    
    
    

const INF = 1e9;
var horarioFinal = [];

function solve(horarios, materias){
        for (let i = 0; materias.length > 0; i++) { 
            for (let h = 0; h < 5; h++) {

            if(horarios[h][i]==0){
                for (let j = 0; j < materias.length; j++) {
                    if(materias[j]=="mate" && profeMate[h][i]==1 || materias[j]=="proy" && profeProy[h][i]==1 || materias[j]=="lengua" && profeLengua[h][i]==1 || materias[j]=="quimica" && profeQuimica[h][i]==1 || materias[j]=="etica" && profeEtica[h][i]==1 || materias[j]=="hJudia" && profeJudia[h][i]==1 || materias[j]=="cultura" && profeCultura[h][i]==1 || materias[j]=="arte" && profeArte[h][i]==1 || materias[j]=="ingles" && profeIngles[h][i]==1 || materias[j]=="fisica" && profeFisica[h][i]==1 || materias[j]=="bEnd" && profeBackEnd[h][i]==1|| materias[j]=="fEnd" && profeFrontEnd[h][i]==1 || materias[j]=="gym" && profeGym[h][i]==1 || materias[j]=="IOT" && profeIOT[h][i]==1|| materias[j]=="geografia" && profeGeografia[h][i]==1){
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
                        }else if(materias[j]=="quimica"){
                            profeQuimica[h][i]==0;
                        }else if(materias[j]=="etica"){
                            profeEtica[h][i]==0;
                        }else if(materias[j]=="hJudia"){
                            profeJudia[h][i]==0;
                        }else if(materias[j]=="cultura"){
                            profeCultura[h][i]==0;
                        }else if(materias[j]=="arte"){
                            profeArte[h][i]==0;
                        }else if(materias[j]=="ingles"){
                            profeIngles[h][i]==0;
                        }else if(materias[j]=="fisica"){
                            profeFisica[h][i]==0;
                        }else if(materias[j]=="bEnd"){
                            profeBackEnd[h][i]==0;
                        }else if(materias[j]=="fEnd"){
                            profeFrontEnd[h][i]==0;
                        }else if(materias[j]=="gym"){
                            profeGym[h][i]==0;
                        }else if(materias[j]=="IOT"){
                            profeIOT[h][i]==0;
                        }else if(materias[j]=="geografia"){
                            profeGeografia[h][i]==0;
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
                        }else if(materias[j]=="quimica"){
                            profeQuimica[h][i]==1;
                        }else if(materias[j]=="etica"){
                            profeEtica[h][i]==1;
                        }else if(materias[j]=="hJudia"){
                            profeJudia[h][i]==1;
                        }else if(materias[j]=="cultura"){
                            profeCultura[h][i]==1;
                        }else if(materias[j]=="arte"){
                            profeArte[h][i]==1;
                        }else if(materias[j]=="ingles"){
                            profeIngles[h][i]==1;
                        }else if(materias[j]=="fisica"){
                            profeFisica[h][i]==1;
                        }else if(materias[j]=="bEnd"){
                            profeBackEnd[h][i]==1;
                        }else if(materias[j]=="fEnd"){
                            profeFrontEnd[h][i]==1;
                        }else if(materias[j]=="gym"){
                            profeGym[h][i]==1;
                        }else if(materias[j]=="IOT"){
                            profeIOT[h][i]==1;
                        }else if(materias[j]=="geografia"){
                            profeGeografia[h][i]==1;
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

