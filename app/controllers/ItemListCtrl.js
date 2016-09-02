"use strict";

// CURRENTLY THIS JUST GETS ITEMS
app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData) {
  $scope.searchText = SearchTermData;
  ItemStorage.getItemList()
  .then( (itemCollectionArr)=>{
    console.log('itemCollectionArr', itemCollectionArr)
    $scope.items = itemCollectionArr;
  });
});
