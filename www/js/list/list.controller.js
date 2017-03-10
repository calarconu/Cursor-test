(function () {
    'use strict';

    angular.module('starter.list')
    .controller('listPersonController', listPersonController);

    listPersonController.$inject = ['getterAndSetter', 'HttpService', '$ionicModal', '$scope'];         
    function listPersonController(getterAndSetter, HttpService, modal, $scope) {

    	var vm = this;

        //Variables
		vm.personsData = [];
		vm.countriesData = [];
		vm.modalDetalle;

		//Funciones
		vm.openModal = openModal;
		vm.closeModal = closeModal;

		modal.fromTemplateUrl('personDetail.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			vm.modalDetalle = modal;
		});

		function openModal(){
			vm.modalDetalle.show();
		}

		function closeModal(){
			vm.modalDetalle.hide();
		}

		HttpService.getPersons().then(function(obj){
			getterAndSetter.setPersonsVar(obj);
			vm.personsData = obj;
		});

		HttpService.getCountries().then(function(obj){
			getterAndSetter.setCountriesVar(obj);
			vm.countriesData = obj;
		});
    }

})();