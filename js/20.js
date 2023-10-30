
//Metodos de propiedad
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    },
    pausar: function(){
        console.log('pausando...')
    },
    crearPLaylist: function(nombre){
        console.log(`Creando la PLaylist: ${nombre}`);
    }
}
    reproductor.borrarCancion = function(id) {
        console.log(`Eliminando La cancion: ${id}`)
    }

reproductor.reproducir(3840)
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPLaylist('Dembow')