const API_KEY = 'api_key=b0c0d6c7530234d1ffb25e76f4ee8b84'; 
const frameLaVenganzaDelSexo = `<iframe width="727" height="409" src="<iframe width="725" height="408" src="<iframe width="725" height="408" src="https://youtu.be/mLOLdCUAkXQ"> </iframe>`;
function obtenerPeliculas(nameMovie) {
    // Consumimos la API" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscre
    $.ajax({
        type: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${nameMovie}`,
        dataType: "json",
        async: true,
        success: function (data) { 
        Mostrar(data) } // En caso de consulta exitosa se ejecuta esto
    });
}

function Mostrar(data){
    //alert(data.results[0].overview)
    $("#contenedorimg").empty();
  $("#conetenedorDatosPelicula").empty();
  $("#contenedorTrailer").empty();
  $("#contenedorimg").append(`<img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.results[0].poster_path}" alt="">`);
  $("#conetenedorDatosPelicula").append(`<h2>${data.results[0].original_title}</h2>`);
  $("#conetenedorDatosPelicula").append(`<p>${data.results[0].overview}</p>`);
  $("#conetenedorDatosPelicula").append(`<p>Popularidad: ${data.results[0].popularity}</p>`);
  $("#conetenedorDatosPelicula").append(`<p>Fecha de lanzamiento: ${data.results[0].release_date}</p>`);
  $("#conetenedorDatosPelicula").append(`<p>Promedio de puntuación: ${data.results[0].vote_average}</p>`);
  $("#conetenedorDatosPelicula").append(`<p>Para adultos: ${data.results[0].adult}</p>`);
  $("#conetenedorDatosPelicula").append(`<p>Idioma original: ${data.results[0].original_language}</p>`);

  $("#contenedorTrailer").append(frameLaVenganzaDelSexo);
}

function pasarPelicula(name){ 
    sessionStorage.setItem('movie',name);
    location.href='plantilla_película.html';
}

$(document).ready(function(){
    var pelicula = sessionStorage.getItem('movie');
    obtenerPeliculas(pelicula);
    
});