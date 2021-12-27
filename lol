const  fila  =  documento . querySelector ( '.contenedor-carrusel' ) ;
const  peliculas  =  documento . querySelectorAll ( '.pelicula' ) ;

const  flechaIzquierda  =  documento . getElementById ( 'flecha-izquierda' ) ;
const  flechaDerecha  =  documento . getElementById ( 'flecha-derecha' ) ;

//? ----- ----- Event Listener para la flecha derecha. ----- -----

flechaDerecha . addEventListener ( 'clic' ,  ( )  =>  {
	fila . scrollLeft   =  fila . offsetWidth ;

	const  indicadorActivo  =  documento . querySelector ( '.indicadores .activo' ) ;
	if ( indicadorActivo . nextSibling ) {
		indicadorActivo . nextSibling . classList . agregar ( 'activo' ) ;
		indicadorActivo . classList . eliminar ( 'activo' ) ;
	}
} ) ;

//? ----- ----- Event Listener para la flecha izquierda. ----- -----

flechaIzquierda . addEventListener ( 'clic' ,  ( )  =>  {
	fila . scrollLeft  =  fila . offsetWidth ;

	const  indicadorActivo  =  documento . querySelector ( '.indicadores .activo' ) ;
	if ( indicadorActivo . previousSibling ) {
		indicadorActivo . previousSibling . classList . agregar ( 'activo' ) ;
		indicadorActivo . classList . eliminar ( 'activo' ) ;
    }
} ) ;

//? ----- ----- Paginacion ----- -----
const  numeroPaginas  =  Math . ceil ( peliculas . longitud  /  5 ) ;
para (sea  i = 0 ;  i <numeroPaginas;  i ++) {
	const  indicador  =  documento . createElement ( 'botón' ) ;

	si(i === 0) {
		indicador . classList . agregar ( 'activo' ) ;
	}

	documento . querySelector ( '.indicadores' ) . appendChild ( indicador ) ;
	indicador . addEventListener ( 'clic' ,  ( e )  =>  {
		fila . scrollLeft  =  i  *  fila . offsetWidth ;

		documento . querySelector ( '.indicadores .activo' ) . classList . eliminar ( 'activo' ) ;
		e . objetivo . classList . agregar ( 'activo' ) ;
	} ) ;
}

//? ----- ----- Desplazarse ----- -----
peliculas . forEach ((pelicula )  =>  {
	pelicula . addEventListener ( 'mouseenter' ,  ( e )  =>  {
		 elemento.constante = e.currentTarget;
		setTimeout ( ( )  =>  {
			peliculas . forEach ( pelicula  =>  pelicula . classList . remove ( 'hover' ) ) ;
			elemento . classList . agregar ('hover' ) ;
		} ,  300 ) ;
    } ) ;
} ) ;

fila . addEventListener ('mouseleave' ,  ( )  =>  {
	peliculas . forEach (pelicula  =>  pelicula . classList . remove ( 'hover' ) ) ;
} ) ; 