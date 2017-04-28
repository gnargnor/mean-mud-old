app.factory('CreatorService', ['$http', '$location', function($http, $location){

  var messageObject = {
    message: ''
  };

  //world definitions
  var worldsObject = {
    curWorlds : [],
    curWorld : {}
  };

  var world = {
    worldName: '',
  	author: '',
  	dateCreated: undefined,
  	shortDesc: '',
  };

  var worldCreator = function(world){
    var curWorld = {};
    curWorld.worldName = world.worldName;
    curWorld.shortDesc = world.shortDesc;
    curWorld.author = world.author;
    if (curWorld.worldName === '' || curWorld.shortDesc === '' || curWorld.author === '') {
        messageObject.message = "All fields are required.";
        return;
    }
    console.log('world creator: ', curWorld);
    world.worldName = '';
    world.shortDesc = '';
    world.author = '';
    addToUniverse(curWorld);
  };

  var addToUniverse = function(curWorld) {
        return $http.post('/create', curWorld)
            .then(function(response) {
                console.log('addToUniverse: ', response);
                getWorlds();
              });
        };

  var getWorlds = function(){
      return $http.get('/create')
        .then(function(response){
          console.log('getWorlds: ', response.data);
          worldsObject.curWorlds = response.data;
          return worldsObject.curWorlds;
        });
  };

  var editWorld = function(world) {
    console.log(world);
    worldsObject.curWorld = world;
    $location.path('/worldHome');
  };
  //world definitions

  //location definitions
  var locationsObject = {
    curLocs : [],
    curLoc : {}
  };

  var newLoc = {
    locName: '',
    locShortDesc: '',
    locDesc: '',
    locNotes: '',
  };

  var locationCreator = function(newLoc) {
    var curLoc = {};
    curLoc.locName = newLoc.locName;
    curLoc.locShortDesc = newLoc.locShortDesc;
    curLoc.locDesc = newLoc.locDesc;
    if (curLoc.locName === '' || curLoc.locShortDesc === '' || curLoc.locDesc === '') {
        messageObject.message = "All fields are required.";
        return;
    }
    console.log('location creator: ', curLoc);
    newLoc.locName = '';
    newLoc.locShortDesc = '';
    newLoc.locDesc = '';
    addLocToWorld(curLoc);
  };

  var addLocToWorld = function(newLoc) {
    $http.post('/location', newLoc)
      .then(function(response){
        console.log('addLocToWorld: ', response);
        getLocations();
      });
  };

  var getLocations = function() {
    $http.get('/location')
      .then(function(response){
        console.log('get locations: ', response);
        locationsObject.curLocs = response.data;
        return locationsObject.curLocs;
      });
  };

  var editLocation = function(location){
    console.log('edit location: ', location);
    locationObject.curLoc = location;
    $location.path('/existingLoc');
  };
  //location definitions

  //item definitions
  var itemsObject = {
    curItems : [],
    curItem : {}
  };

  var newItem = {
    itemName: '',
    itemDesc: '',
    itemNotes: '',
  };

  var itemCreator = function(newItem) {
    var curItem = {};
    curItem.itemName = newItem.itemName;
    curItem.itemShortDesc = newItem.itemShortDesc;
    curItem.itemDesc = newItem.itemDesc;
    if (curItem.itemName === '' || curItem.itemDesc === '') {
        messageObject.message = "All fields are required.";
        return;
    }
    console.log('item creator: ', curItem);
    newItem.itemName = '';
    newItem.itemDesc = '';
    newItem.itemNotes = '';
    addItemToWorld(curItem);
  };//end item creator

  var addItemToWorld = function(newItem) {
    $http.post('/item', newItem)
      .then(function(response){
        console.log('addItemToWorld: ', response);
        getItems();
      });
  };//end addItemToWorld



  var getItems = function() {
    $http.get('/item')
      .then(function(response){
        console.log('get items: ', response);
        itemsObject.curItems = response.data;
        return itemsObject.curItems;
      });
  };

  var editItem = function(item){
    itemObject.curItem = item;
    $location.path('/existingItem');
  };
  //item definitions

  return {

    //world exports
    world : world,
    worldsObject : worldsObject,
    worldCreator : worldCreator,
    getWorlds : getWorlds,
    editWorld : editWorld,

    //location exports
    newLoc : newLoc,
    locationsObject : locationsObject,
    locationCreator : locationCreator,
    getLocations : getLocations,
    editLocation : editLocation,

    //items exports
    newItem : newItem,
    itemsObject : itemsObject,
    itemCreator : itemCreator,
    getItems : getItems,
    editItem : editItem,

    //messages
    messageObject : messageObject
  };
}]);
