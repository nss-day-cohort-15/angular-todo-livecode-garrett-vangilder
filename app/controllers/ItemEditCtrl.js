// "use strict";
//
// app.controller("ItemEditCtrl", function($scope, ItemStorage, $routeParams, $location) {
//   $scope.items = [];
//
//   ItemStorage.getItemList()
//   .then( (itemCollectionArr) => {
//     $scope.items = itemCollectionArr;
//     $scope.selectedItem = $scope.items.filter( function(item) {
//       return item.id === $routeParams.itemId;
//     })[0];
//   });
//
//
// $scope.editTask = function() {
//   let itemId = $routeParams.itemId;
//   $scope.editedItem = {
//     assignedTo: $scope.selectedItem.assignedTo,
//     dependencies: $scope.selectedItem.dependencies,
//     dueDate: $scope.selectedItem.dueDate,
//     isCompleted: $scope.selectedItem.isCompleted,
//     location: $scope.selectedItem.location,
//     task: $scope.selectedItem.task,
//     urgency: $scope.selectedItem.urgency
//   };
//   let editedItem = $scope.editedItem;
//   console.log("itemId", itemId);
//   ItemStorage.editItem(itemId, editedItem)
//   .then(function(response) {
//       ItemStorage.getItemList()
//       .then( (itemCollectionArr) => {
//         $scope.items = itemCollectionArr;
//       })
//       .then( function() {
//         $location.url("items/list");
//       });
//   });
// };
//
// });


"use strict";

app.controller("ItemEditCtrl", function($scope, $location, $routeParams, ItemStorage) {
  $scope.title = "Edit Item";
  $scope.btnText = "Update";
  $scope.newTask = {};

  ItemStorage.getSingleItem($routeParams.itemId)
  .then((response) => {
    $scope.newTask = response;
  });

$scope.addNewItem = () => {
  ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
  .then( (response) => {
    $location.url("/items/list");
  });
};



});
