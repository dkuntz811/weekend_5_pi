myApp.controller('petController', ['$scope','$http', function($scope, $http){
	console.log('in petController');
	var getAll = function(){
		console.log('in getAll');
		$http({
			method: 'GET',
			url: 'user/all',
		}).then(function (response){
			console.log('got this from the server', response);
			$scope.allPets = response.data;
			console.log($scope.allPets);
		});
	}; //end getAll

	getAll();

$scope.deletePet = function(id){
		console.log('in deletePet');
	   var id = pet._id;
		console.log('id is', id);
		$http({
			method: 'DELETE',
			url: '/user/' + id,
		}).then(function(response){
			console.log('delete pet', id);
			getAll();
		})

	};//end deletePet
}]);
