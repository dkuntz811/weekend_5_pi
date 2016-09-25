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

	var deletePet = function(id){
		console.log('in deletePet');
		$http({
			method: 'DELETE',
			url: 'user/delete' + id,
		}).then(function(response){
			console.log('delete pet', id);
			getAll();
		})

	};//end deletePet
}]);
