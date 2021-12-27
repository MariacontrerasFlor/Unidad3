//Aplicando lo aprendido 6
//Crear la clase persona (molde)
function Persona(nombre,apellido,edad,genero,intereses) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad; 
    this.genero = genero;
    this.intereses = intereses;
    this.bio = function () {
        alert(this.nombre +' '+this.apellido+' tiene '+this.edad+' años. A él le gusta o interesa '+this.intereses)
    };
}


//Aplicando lo aprendido 7
//Crear objeto persona 

var persona1 = new Persona("Jose","Fernandez",22,"M","ser dj");
//persona1.bio();
var persona2 = new Persona("Luis","Garcia",16,"M","mecanica");
persona2.bio();