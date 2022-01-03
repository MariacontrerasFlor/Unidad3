//onliclick

const aviso = document.getElementById('aviso');

// Muestra el dialog (añadiendo el atributo open)
aviso.showModal();

// Oculta el dialog (eliminando el atributo open)
aviso.close();



document.getElementById("boton").addEventListener("click",function(){
    mialerta();
    cifrar();
})

document.getElementById("boton").addEventListener("click",function(){
    mialerta();
    decifrar();
})
