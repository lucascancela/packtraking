var profes = ["profe de py", "profe de diseño"];

function quienEsElMejor(profesores){
  let num = Math.random()
  num
  if(num>=0.5){
    console.log("El profe elegido es: " + profesores[0])
  }else{
    console.log("El profe elegido es: " + profesores[1])
  }
}
quienEsElMejor(profes);