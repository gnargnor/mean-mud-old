app.factory('CreatorService', ['$http', '$location', function($http, $location){

  //message object
  var messageObject = {
    message: ''
  };

  var Universe = {};

  //world definitions
  var worldsObject = {
    curWorlds : [],
    curWorld : {}
  };

  var locationsObject = {
    curLocs : [],
    curLoc : {
      sights: [],
      curSight: {}
    }
  };

  var itemsObject = {
    curItems : [],
    curItem : {}
  };

  var newWorld = {
    worldName: '',
  	author: '',
  	dateCreated: undefined,
  	shortDesc: '',
  };

  var newLoc = {
    locName: '',
    locShortDesc: '',
    locDesc: '',
    locNotes: '',
  };

  var newItem = {
    itemName: '',
    itemDesc: '',
    itemNotes: '',
  };

  //world creator
  var worldCreator = function(newWorld){
    var curWorld = {};
    curWorld.worldName = newWorld.worldName;
    curWorld.shortDesc = newWorld.shortDesc;
    //change this to user id?
    curWorld.author = newWorld.author;
    if (curWorld.worldName === '' || curWorld.shortDesc === '' || curWorld.author === '') {
        messageObject.message = "All fields are required.";
        return;
    }
    console.log('world creator: ', curWorld);
    newWorld.worldName = '';
    newWorld.shortDesc = '';
    newWorld.author = '';
    addToUniverse(curWorld);
  };

  var locationCreator = function(newLoc) {
    var curLoc = {};
    curLoc.locName = newLoc.locName;
    curLoc.locShortDesc = newLoc.locShortDesc;
    curLoc.locDesc = newLoc.locDesc;
    curLoc.worldID = worldsObject.curWorld._id;
    console.log('locationsObject at location creator: ', locationsObject.curWorld);
    if (curLoc.locName === '' || curLoc.locShortDesc === '' || curLoc.locDesc === '') {
        messageObject.message = "All fields are required.";
        return;
    }
    console.log('location creator: ', curLoc);
    newLoc.locName = '';
    newLoc.locShortDesc = '';
    newLoc.locDesc = '';
    locationsObject.curLoc = curLoc;
    addLocToWorld(curLoc);
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
    itemsObject.curItem = curItem;
    addItemToWorld(curItem);
  };//end item creator

  var addToUniverse = function(curWorld) {
        return $http.post('/create', curWorld)
            .then(function(response) {
                console.log('addToUniverse: ', response);
                worldsObject.curWorld = response.data;
                getWorlds();
                $location.path('/worlds');
              });
        };

  var updateWorld = function(curWorld){
    $http.put('/create', curWorld)
      .then(function(response){
        worldsObject.curWorld = response.data;
        //updates locations according to world update
        getLocations();
        //updates worldsObject.curWorlds to include the new update in the current world - maybe unnecessary
        getWorlds();

        console.log('updated world: ', worldsObject.curWorld);
      });
  };

  var editWorld = function(world) {
    // console.log(world);
    getLocations();
    $location.path('/worldHome');
  };

  var editLocation = function(){
    console.log('editLocation sights: ', locationsObject.curLoc, locationsObject.curLoc.sights);
    getLocations();
    $location.path('/existingLoc');
  };

  var addLocToWorld = function(newLoc) {
    worldsObject.curWorld.locations.push(newLoc);
    updateWorld(worldsObject.curWorld);
    $location.path('/existingLoc');
  };

  var addSightToLoc = function(sight){
    var newSight = {};
    newSight.keyword = sight.keyword;
    newSight.sightDesc = sight.sightDesc;
    newSight.isImportant = sight.isImportant || false;
    newSight.locID = locationsObject.curLoc._id;
    newSight.worldID = worldsObject.curWorld._id;
    console.log('new sight added: ', newSight);
    sight.keyword = '';
    sight.sightDesc = '';
    sight.isImportant = false;
    locationsObject.curLoc.sights.push(newSight);
    locationsObject.curLoc.sights.curSight = newSight;
    console.log(locationsObject.curLoc.sights);
    updateLocation(locationsObject.curLoc);
    // editSight(locationsObject.curLoc.sights.curSight);
  };

  var updateLocation = function(curLoc){
    console.log('location to update: ', curLoc);
    for (i=0; i<worldsObject.curWorld.locations.length; i++){
      if (curLoc._id === worldsObject.curWorld.locations[i]._id){
        worldsObject.curWorld.locations[i] = curLoc;
      }
    }
    updateWorld(worldsObject.curWorld);
  };

  var updateSight = function(curSight){
    console.log('sight in edit sight : ', curSight);
    for (i = 0; i<locationsObject.curLoc.sights.length; i++){
      if (locationsObject.curLoc.sights[i]._id === curSight._id){
        locationsObject.curLoc.sights[i] = curSight;
        locationsObject.curLoc.sights.curSight = curSight;
        console.log('editCurSight match: ',locationsObject.curLoc.sights[i]);
      }
    }
    updateLocation(locationsObject.curLoc);
  };







  // var newSight = {
  //   keyword: '',
  //   sightDesc: '',
  //   isImportant: true
  // };

  // var updateSights = function(sight){
  //   if (sight._id){
  //
  //   } else {
  //
  //   }
  // };

  // var commitLocation = function(location){
  //
  // }
  //location definitions

  //item definitions



  var addItemToWorld = function(newItem) {
    $http.post('/item', newItem)
      .then(function(response){
        console.log('addItemToWorld: ', response);
        getItems();
        $location.path('/editItem');
      });
  };//end addItemToWorld



  // var getItems = function() {
  //   $http.get('/item')
  //     .then(function(response){
  //       console.log('get items: ', response);
  //       itemsObject.curItems = response.data;
  //       return itemsObject.curItems;
  //     });
  // };

  var editItem = function(){
    // itemsObject.curItem = item;
    $location.path('/existingItem');
  };
  //item definitions

  var displayDesc = function(typeOfInput){
    console.log(typeOfInput);
    if (typeOfInput.worldName){
      var world = typeOfInput;
      worldsObject.curWorld = world;
    } else if (typeOfInput.locName){
      var location = typeOfInput;
      locationsObject.curLoc = location;
      console.log('displayDesc: ', locationsObject.curLoc);
    } else if (typeOfInput.itemName){
      var item = typeOfInput;
      itemsObject.curItem = item;
    } else if (typeOfInput.sightDesc){
      var sight = typeOfInput;
      locationsObject.curLoc.sights.curSight = sight;
    } else {
      messageObject.message = "display error: bad code";
    }
  };

  var getActiveUniverse = function(){
    $http.get('/universe/active')
      .then(function(response){
        console.log('getActiveUniverse: ', response.data);
        // itemsObject.curItems = response.data;
        // return itemsObject.curItems;
      });
  };

  var getWorlds = function(){
      return $http.get('/create')
        .then(function(response){
          console.log('getWorlds: ', response.data);
          worldsObject.curWorlds = response.data;
          // getLocations();
        });
  };

  var getLocations = function() {
    locationsObject.curLocs = worldsObject.curWorld.locations;
    locationsObject.curLoc = {};
    locationsObject.curWorld = worldsObject.curWorld._id;
  };



  //get calls
  getActiveUniverse();
  getWorlds();
  getLocations();
  // getItems();

  return {

    //world exports
    newWorld : newWorld,
    worldsObject : worldsObject,
    worldCreator : worldCreator,
    getWorlds : getWorlds,
    editWorld : editWorld,

    displayDesc : displayDesc,

    //location exports
    newLoc : newLoc,
    locationsObject : locationsObject,
    locationCreator : locationCreator,
    getLocations : getLocations,
    editLocation : editLocation,
    addSightToLoc : addSightToLoc,
    updateSight : updateSight,

    //items exports
    newItem : newItem,
    itemsObject : itemsObject,
    itemCreator : itemCreator,
    // getItems : getItems,
    editItem : editItem,

    //messages
    messageObject : messageObject
  };
}]);
