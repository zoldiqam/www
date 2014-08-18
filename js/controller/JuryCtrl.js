app.controller('JuryCtrl', function($scope){
	var data = [{id: 0, nom: 'Chef Moha', image:'img/jury/moha.jpg', description: 'Ce diplômé de l’école hôtelière de Genève, Chef Moha est un véritable érudit de la cuisine marocaine. Après avoir fait ses preuves dans moult établissements européens réputés, il rentre au Maroc après 14 ans pour créer son propre restaurant ...'}, {id: 1, nom: 'Chef khadija', image:'img/jury/khadija.jpg', description: 'C’est sans doute elle la gardienne des recettes traditionnelles marocaines. Cette lauréate de l’Ecole de tourisme et d’hôtellerie de Marrakech, a officié en tant que professeur à l’Ecole hôtelière de Fès ...'},
	 {id: 2, nom: 'Chef Ramzi', image:'img/jury/ramzi.jpg', description: 'Chef ramzi description lorem'}, {id: 3, nom: 'Chef Meryeme', image:'img/jury/meryeme.jpg', description: 'Chef meryem description lorem'}];

    $scope.jurys = data;
	$scope.selectedjury = $scope.jurys[0];
	$scope.setSelected = function(index){
		$scope.selectedjury = $scope.jurys[index];
	}

})