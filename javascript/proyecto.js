var bloques = [ 
    [1,2,3,4,5,0],
    [1,2,3,4,5,6],
    [1,2,3,4,5,0],
    [1,2,3,4,5,6],
    [1,2,3,0,0,0],

]

var materia = ["lengua", "matematica", "fisica"];
var cursos = ["a"];
console.log("HOl");
function a(horarios){
    let nuevoHorarios = [...horarios];
    nuevoHorarios
    var A = 0;
    horarios.forEach(e => {
        e.forEach(x => {
                //hacer q se meta la materia en nuevohorarios e ir probadno con todas hasta q no se puieda y hacer backtracking

        });
    });
    console.log(A);

}

a(bloques);

// console.log(orden_bloques(bloques));
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