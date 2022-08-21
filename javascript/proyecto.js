var bloques = [ 
    [1,2,3,4,5,0],
    [1,2,3,4,5,6],
    [1,2,3,4,5,0],
    [1,2,3,4,5,6],
    [1,2,3,0,0,0],

]

var materia = ["lengua", "matematica", "fisica"];
var cursos = ["a"];
var condicion = false;

function a(horarios){
    let nuevoHorarios = [...horarios];
    
    if(condicion==false){    
        var i = 0;
        condicion=false;

        nuevoHorarios.forEach(e => {
            e.forEach(x => {
                //hacer q se meta la materia en nuevohorarios e ir probadno con todas hasta q no se puieda y hacer backtracking
                
            });

            if(repetidos(e)==false){
                //aca hacer llamado recursivo
            } else{
                i+=1;
                i
            }
            
        });
        
        if(i==5){
            condicion=true;
        }
    } 
    
    if(condicion==true){
        return nuevoHorarios;
        
    }else{
        return("no solucion posible");
    }
}
console.log(a(bloques));


console.log(orden_bloques(bloques));

function orden_bloques(bloques){
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