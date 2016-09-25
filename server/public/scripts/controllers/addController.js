myApp.controller('addController', ['$scope','$http', function($scope, $http){
	console.log('in addController');

	$scope.allPets = [];

	$scope.addPet = function(){
		var newPet = {
			name: $scope.name,
			animal: $scope.animal,
			age: $scope.age,
			imageurl: $scope.imageurl
		};//end object newPet
		console.log('newPet', newPet);
		$http({
			method: 'POST',
			url: 'user/addPet',
			data: newPet
		}).then(function(response){
			console.log('got this from the server', response);
		});//end http
		getAll();
	};

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
}]);
