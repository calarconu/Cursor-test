(function () {
    'use strict';

    angular.module('starter.about')
    .controller('aboutUsController', aboutUsController);

    aboutUsController.$inject = [];         
    function aboutUsController() {
        console.log("about");
    }

})();