//Seleccionar elementos:

$("p").css("background-color", "yellow");


$("#miElemento").text("Nuevo contenido");
$(".claseElemento").hide();

//Manipular elementos:
$("#contenedor").append("<div>Nuevo div</div>");

$("#botonEliminar").click(function () {
  $("#elementoAEliminar").remove();
});

//Cambiar el texto de un botÃ³n al pasar el mouse sobre Ã©l:
$("#boton").hover(
  function () {
    $(this).text("Nuevo texto");
  },
  function () {
    $(this).text("Texto original");
  }
);

$("#botonDesplazar").click(function () {
  $("#elementoDesplazable").animate({ marginLeft: '+=100px' }, 'slow');
});

$("#elemento").on({
  dblclick: function () {
    $(this).animate({ width: '+=50px', height: '+=50px' });
  },
  click: function () {
    $(this).animate({ width: '-=50px', height: '-=50px' });
  }
});
$("form").submit(function (event) {
  if ($("#campo").val() === "") {
    alert("El campo no puede estar vacÃ­o");
    event.preventDefault(); // Evita el envÃ­o del formulario
  }
});
$("#mostrarBoton").click(function () {
  $("#elementoOculto").show();
});

$("#ocultarBoton").click(function () {
  $("#elementoOculto").hide();
});
