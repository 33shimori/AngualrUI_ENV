angular.module('app', ['myApp.controllers', 'myApp.directives']);




'use strict';
angular.module('myApp.controllers', []).
        controller('helloWorldCtrl', function ($scope){
          $scope.name={ first: "Jane", last: "Doe" };
});


'use strict';
angular.module('myApp.directives', [])
        .directive('helloWorld', function () {
          return {
            restrict: 'AE',
    scope: {name: "=name"},
    template:
            "<h1>Hello {{ name.first }} {{name.last}}!</h1>" +
    "<input data-ng-model='name.first'></input>" +
            "<input data-ng-model='name.last'></input>"
          };
});

