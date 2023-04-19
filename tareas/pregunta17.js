let tareas=["Jugar xbox","realizar tarea de programación","nadar", "Ir al cine", "Estudiar para Ing. de SW II"];
let i = 1;
// INSERTAR CÓDIGO PARA AGREGAR ELEMENTO AL ARREGLO
console.log("Mi lista de actividades");
console.log("************"); 
for(let list of tareas){
    console.log(`${i}.-${list}`);
    i = i + 1;
}