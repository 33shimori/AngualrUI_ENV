'use string';
describe('Spec for directives', function () {
  beforeEach (module('myApp.directives'));
  var $scope;
  beforeEach (inject (function ($rootScope){
    $scope = $rootScope.$new();
    $scope.name={ first: "John", last: "Smith"};
            }));
   describe ('hello-world', function (){
     it ('Should contain the provided name', function (){
            inject(function ($compile){
               var element = $compile('<div hello-world name="name"></div>')($scope);
               $scope.$digest();
               expect(element.html()).to.contain("John");
             });
           });
   });         
});
