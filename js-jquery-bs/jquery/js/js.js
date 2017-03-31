/*=================================Anonymous Function=================================*/
$( document ).ready(function() {
    $('#name').change(function()
	{
		$('#mostrarResultado').css("backgroundColor", "lightblue");
        mostrarResultados($('#name').val(), $('#mostrarResultado'));
    });
});
 
 /*
	generic function
	params:
	texto: text in
	selector: selector from html
 */
var mostrarResultados = function (texto, selector){
	$('#mostrarResultado').val(texto);
    selector.css("fontWeight", "bold");
	
};
 

/*=================================Constructure Function=================================*/
function Usuario(nombre, fecha) {
    //Propiedades privadas
    var edad;
    //Métodos privados
    var calcularEdad = function() {
		if(fecha.length > 0){
			var actual = new Date().getFullYear();
			var part = fecha.split('-');
			var nacimiento = part[0];
			if (actual <= nacimiento)
				return 0;
			else{
				edad = actual - nacimiento;
				return edad;
			}
		}else	
			return 0;
		
    };
    //Propiedades públicas
    this._nombre = nombre;
    this._fechaNacimiento = fecha;
    this._edad = edad;
    //Métodos públicos
    this._presentarse = function() {
		if(calcularEdad() == 0)
			mostrarResultados("Fecha Nula o fecha mayor o igual al actual", $('#mostrarResultado'));
		else{
			var text = "Hola, mi nombre es " + this._nombre + " y tengo " + calcularEdad() + " años."
			mostrarResultados(text, $('#mostrarResultado'));
		}
    };
}

$( document ).ready(function() {
	$( '#btn_calcular_edad' ).click(function() {
		var usuario = new Usuario("Allen",$('#fecha_nacimiento').val());
		usuario._presentarse();
	});
});

/*=================================jQuery Selectors=================================*/

/*id Selector click event*/
$( document ).ready(function() {
	$( '#selector' ).click(function() {
		$('#mostrarResultado').css('border','3px solid blue');
		mostrarResultados($( '#textSelector' ).val(), $('#mostrarResultado'));
	});
});
/*class Selector click event*/
$( document ).ready(function() {
	$( '.classSelector' ).click(function() {
		$('#mostrarResultado').css("backgroundColor", "red");
		mostrarResultados($( '#textSelector' ).val(), $('#mostrarResultado'));
	});
});

/*tag Selector click event*/
$( document ).ready(function() {
	$( 'section' ).click(function() {
		$('#mostrarResultado').css("backgroundColor", "green");
		mostrarResultados($( '#textSelector' ).val(), $('#mostrarResultado'));
	});
});
/*Alter selector*/
$( document ).ready(function() {
	$( '#alterSelector' ).click(function() {
		if($( '#textSelectorAlter' ).val() == ''){
			alert("llenar texto");
		}else{
			$('#mostrarResultado').css("backgroundColor", "yellow");
			mostrarResultados($( '#textSelector' ).val()+$( '#textSelectorAlter' ).val(), $('#mostrarResultado'));
		}
	});
});
/*child and descendant selectors*/
$( document ).ready(function() {
	$( '#childSelector' ).click(function() {
		$("div").children("p").css({"color": "red", "border": "2px solid red"});
		$('#mostrarResultado').css("backgroundColor", "pink");
		mostrarResultados($('div').first().text(), $('#mostrarResultado'));
	});
});