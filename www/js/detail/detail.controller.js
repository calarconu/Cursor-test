(function () {
	'use strict';

	angular.module('starter.detail')
	.controller('detailController', detailController);

	detailController.$inject = ['$stateParams', 'getterAndSetter'];         
	function detailController(parametros, getterAndSetter){

		var vm = this;

		//Variables
		vm.idPersona = parseInt(parametros.idPersona);
		vm.personsData = getterAndSetter.getPersonsVar();
		vm.countriesData = getterAndSetter.getCountriesVar();
		vm.personaSelecionada = [];

		//Functions
		vm.validaRut = validaRut;
		vm.validaTelefono = validaTelefono;

		vm.personsData.forEach(function(obj){
			if( obj.id === vm.idPersona ) vm.personaSelecionada = obj;
		});

		function validaTelefono(telefono){
			telefono = ""+ telefono;
			if( telefono.length < 11 ) return false;
			else return true;
		}

		function validaRut(rutCompleto) {
        	if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
        		return false;
        	var tmp 	= rutCompleto.split('-');
        	var digv	= tmp[1]; 
        	var rut 	= tmp[0];
        	if ( digv == 'K' ) digv = 'k' ;
        	return (dv(rut) == digv );
        }

        function dv(T){
        	var M=0,S=1;
        	for(;T;T=Math.floor(T/10))
        		S=(S+T%10*(9-M++%6))%11;
        	return S?S-1:'k';
        }
	}

})();