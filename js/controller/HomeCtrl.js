app.controller('HomeCtrl', function($scope, $timeout, sharingService){
	$scope.liftoffTime = new Date("July 14, 2015 22:00:00");
	$scope.page = sharingService.sharedObject.navobject;
	$scope.number = 0;
	$scope.changeData = function(){$scope.number++}

	$scope.intervalFunction = function(){
		$timeout(function() {
      		$scope.changeData();
      		$scope.intervalFunction();
    	}, 5000)
	}

	$scope.intervalFunction();

	
})