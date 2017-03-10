(function () {
    'use strict';

    angular.module('starter.services')
    .factory('HttpService', HttpService)
    .factory('getterAndSetter', getterAndSetter);

    HttpService.$inject = ['$http', '$q'];
    function HttpService($http, $q) {
        var service = {
	      getPersons: getPersons,
	      getCountries: getCountries
	    };
	    
		return service;

		function getPersons() {
			var urlEndPoint = 'https://private-9f23a-phonebooktest.apiary-mock.com/persona';
			var deferred = $q.defer();

			$http.get(urlEndPoint).then(getPersonsComplete).catch(getPersonsFailed);

			function getPersonsComplete(response){
				deferred.resolve(response.data);
			}

			function getPersonsFailed(reason) {
				deferred.reject();
			}

			return deferred.promise;
		}

		function getCountries() {
			var urlEndPoint = 'https://private-9f23a-phonebooktest.apiary-mock.com/region';
			var deferred = $q.defer();

			$http.get(urlEndPoint).then(getCountriesComplete).catch(getCountriesFailed);

			function getCountriesComplete(response){
				deferred.resolve(response.data);
			}

			function getCountriesFailed(reason) {
				deferred.reject();
			}

			return deferred.promise;
		}
    }

    function getterAndSetter(){

    	var personData = '';
    	var countriesData = '';

    	var service = {
    		getPersonsVar: getPersonsVar,
    		getCountriesVar: getCountriesVar,
    		setPersonsVar: setPersonsVar,
    		setCountriesVar: setCountriesVar
    	};

    	return service;

    	function getPersonsVar(){
    		return personData;
    	}

    	function getCountriesVar(){
			return countriesData;
    	}

    	function setPersonsVar(data){
    		personData = data;
    	}

    	function setCountriesVar(data){
    		countriesData = data;
    	}


    }

})();
	