app.factory('UniverseService', ['$http', '$location', function($http, $location){
  console.log('universe service hit');

  var messageObject = {
    message: ''
  };

  var unvsObject = {
    allUnvs : [],
    curUnv : {
      universeName : '',
      author : '',
      version : Number,
      unvNotes : '',
      active : Boolean,
      worlds : [],
      player : {},
      engine : {},
      users : []
    }
  };

  var universeCreator = function(universe){
    var newUnv = {};
    newUnv.universeName = universe.universeName;
    newUnv.author = universe.author;
    newUnv.version = universe.version;
    if (newUnv.universeName === '' || newUnv.version === 0) {
        messageObject.message = "All fields are required.";
        return;
    }
    console.log('universe creator: ', newUnv);
    addUniverse(newUnv);
  };

  var addUniverse = function(newUnv) {
        return $http.post('/universe', newUnv)
            .then(function(response) {
                console.log('addUniverse: ', response);
                getUnvs();
            });
  };

  var getUnvs = function(){
      return $http.get('/universe')
        .then(function(response){
          console.log('getUnvs: ', response.data);
          unvsObject.allUnvs = response.data;
          return unvsObject.allUnvs;
        });
  };

  var editUnv = function(universe) {
    console.log(universe);
    unvsObject.curUnv = universe;
    $location.path('/universeHome');
  };

  getUnvs();

  return {
    messageObject : messageObject,
    unvsObject : unvsObject,
    universeCreator : universeCreator,
    editUnv : editUnv
  };
}]);
