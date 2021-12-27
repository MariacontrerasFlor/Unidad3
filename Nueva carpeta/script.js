//Mini proyecto
//Un arreglo con los nombres vehículos
const cars =['bmw', 'volvo','saab','ford','fiat','audi'];

function mostrar(cars){
    let text ="";

    for(let i=0; i < cars.length; i++){
    text += '<img src="asstes/img/' + cars[i] +'.png" width="150">;'
    }

    //Ocupamos innerHTML para mostrar el arreglo
    document.getElementById("demo").innerHTML= text;
}

//Al hacer click push, 
document.getElementById("btn_push").onclick = functionPush;

function functionPush(){
    cars.push('lexus');
    mostrar(cars);
}

document.getElementById("btn_pop").onclick = functionPop;

function functionPop(){
    if(cars.length>0){
    cars.pop();
    mostrar(cars);
    }   else{
        alert("No se puede borrar más, el arreglo está vacío");
    }
}

document.getElementById("btn_unshift").onclick = functionUnshift;

function functionUnshift(){
    cars.unshift('ferrari');
    mostrar(cars);
}

document.getElementById("btn_shift").onclick = functionShift;

function functionShift(){
    if(cars.length>0){
    cars.shift();
    mostrar(cars);
    }   else{
        alert("No se puede borrar más, el arreglo está vacío");
    }
}

document.getElementById("btn_slice").onclick = functionSlice;

function functionSlice(){
    let begin = document.getElementById("begin").value;
    let end = document.getElementById("end").value;
    mostrar(cars.slice(begin,end));
}
//Parte que muestra inicialmente las imágenes
mostrar(cars);