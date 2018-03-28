angular.module('myapp', [])
.controller('mycont', ['$scope', function($scope,$element,$attr){
   $scope.xalq =["eli","ehmed","etibar","leyla","gulnar","turkan"]
}]).directive("errr", function(){

	return{
       restrict:'AECM',
       link:function($scope,$lement,$attr){
       }
	}
})





