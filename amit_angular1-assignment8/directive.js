(function(){
    'use strict';
    
    angular
       .module('routerApp')
       .directive('dropdown',dropdown);   
       
function dropdown($document) {
    return {
        restrict: "C",
        link: function (scope, elem, attr) {

            elem.bind('click', function () {
                elem.toggleClass('dropdown-active');
                elem.addClass('active-recent');
            });

            $document.bind('click', function () {
                if (!elem.hasClass('active-recent')) {
                    elem.removeClass('dropdown-active');
                }
                elem.removeClass('active-recent');
            });

        }
    };
};
})();