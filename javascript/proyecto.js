var bloques = [ 
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
]

var materia = ["lengua", "lengua", "matematica", "matematica", "fisica", "fisica"];
var cursos = ["a"];
var condicion = true; //desp poner q empieze en false

function a(horarios, materias, cursos){
    let nuevoHorarios = [...horarios];
    let nuevoMaterias = [...materias];
    if(condicion==true){    
        var i = 0;
   //     condicion=false;

        nuevoHorarios.forEach(e => {
            for (let i = 0; i < 6; i++) {
                //hacer llamado recursivo recursivo??  
                //agregarle a nuevohorarios las materias de nuevamaterias con el llamado recursivo (seguro tenga q pedir ayuda xde)         
            }

        //     if(repetidos(e)==false
        //     ){ {
        //         //aca hacer llamado recursivo
        //     }
        // } else{
        //     i+=1;
        // }
        
        });
    
        
        if(i==5){
            condicion=true;
        }
    } 
    
    // if(condicion==true){
    //     return nuevoHorarios;
        
    // }else{
    //     return("no solucion posible");
    // }
}
console.log(a(bloques, materia, cursos));


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