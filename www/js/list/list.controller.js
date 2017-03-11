(function () {
	'use strict';

	angular.module('starter.list')
	.controller('listPersonController', listPersonController);

	listPersonController.$inject = ['getterAndSetter', 'HttpService', '$ionicModal', '$scope'];         
	function listPersonController(getterAndSetter, HttpService, $ionicModal, $scope) {

		var vm = this;

        //Variables
        vm.personsData 		= [];
        vm.countriesData 	= [];
        vm.nombreModel;
        vm.apellidoModel;
        vm.regionModel;
        vm.comunaModel;
        vm.filterNombre 	= '';
        vm.filterApellido 	= '';
        vm.filterRegion 	= '';
        vm.filterComuna 	= '';
        vm.hasFilters		= false;

        //Functions
        vm.validaRut 			= validaRut;
        vm.openModalFiltrar 	= openModalFiltrar;
        vm.closeModalFiltrar 	= closeModalFiltrar;
        vm.filtrarDatos 		= filtrarDatos;
        vm.borrarFiltro 		= borrarFiltro;

        HttpService.getPersons().then(function(obj){
        	getterAndSetter.setPersonsVar(obj);
        	vm.personsData = obj;
        });

        HttpService.getCountries().then(function(obj){
        	getterAndSetter.setCountriesVar(obj);
        	vm.countriesData = obj;
        });

        //Configuramos el modal
        $ionicModal.fromTemplateUrl('filtrarModal.html', {
        	scope: $scope,
        	animation: 'slide-in-up'
        }).then(function(modal) {
        	$scope.modal = modal;
        });

        function openModalFiltrar(){
        	$scope.modal.show();
        }

        function closeModalFiltrar(){
        	resetModal();
        	$scope.modal.hide();
        }

        function filtrarDatos(){
        	vm.personsData.forEach(function(response){
        		if( response.comunaId === undefined ){
        			response.comunaId = response.direccion.comuna.id;
        			vm.countriesData.forEach(function(countries){
        				countries.comunas.forEach(function(comunas){
        					if( comunas.id === response.comunaId ) response.regionId = countries.id;
        				});
        			});
        		}
        	});
        	vm.hasFilters = true;
        	vm.filterNombre = vm.nombreModel;
        	vm.filterApellido = vm.apellidoModel;
        	vm.filterComuna = vm.comunaModel;
        	vm.filterRegion = vm.regionModel;
        	closeModalFiltrar();
        }

        function borrarFiltro(){
        	resetModal();
        	resetAll();
        	vm.hasFilters = false;
        	closeModalFiltrar();
        }

        function resetModal(){
        	vm.nombreModel = undefined;
        	vm.apellidoModel = undefined;
        	vm.regionModel = undefined;
        	vm.comunaModel = undefined;
        }

        function resetAll(){
        	vm.filterNombre = '';
        	vm.filterApellido = '';
        	vm.filterRegion = '';
        	vm.filterComuna = '';
        }

        //Funcion para validar el rut
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