app.controller('NavCtrl', function($scope, sharingService){
	$scope.collapse = 1;
	$scope.page = 'home';
	sharingService.sharedObject.navobject = $scope.page;

	$scope.openClicked = function(){
		if($scope.collapse == 1){
			$scope.collapse = 0;
		}else{
			$scope.collapse = 1;
		}
	}

	$scope.buttonClicked = function(page){
		$scope.page = page;
		sharingService.sharedObject.navobject = $scope.page;
		$scope.collapse = 1;
	}

	$scope.openMenu = function(){
		$scope.collapse = 0;
	}

	$scope.closeMenu = function(){
		$scope.collapse = 1;
	}

})