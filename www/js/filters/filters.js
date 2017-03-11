(function () {
	'use strict';

	angular.module('starter.filters')
	.filter('rut', rut)
	.filter('telefono', telefono);

	rut.$inject = [];
	function rut() {
		return function(value){
			value = "" + value;
			var valueAux = value.split("-");

			return format_number(valueAux[0]) + "-" + valueAux[1];

		}
	}

	function telefono(){
		return function(value){
			value = "" + value;

			if( value.length >= 11 ){
				var pais = value.substr(0, 2);
				var codigo = value.substr(2, 1);
				var phone = value.substr(3);

				return "+" + pais + " " + codigo + " " + phone;
			}else{
				return value;
			}
		}
	}

	//Coloca los separadores de miles y decimales
	function format_number(n, miles, decimal){
		miles	= miles || '.';
		decimal	= decimal || ',';
		n		+= '';

		var x	= n.split('.'),
		x1	= x[0],
		x2	= x.length > 1 ? decimal + x[1] : '',
		rgx	= /(\d+)(\d{3})/;

		while ( rgx.test(x1) ) x1 = x1.replace(rgx, '$1' + miles + '$2');
		return x1 + x2;
	}

})();
