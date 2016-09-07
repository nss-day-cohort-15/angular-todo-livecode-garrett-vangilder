'use strict';

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location) {
$scope.title = "Add a new Task";
$scope.btnText = "Save new Task";

    $scope.newTask = {
        assignedTo: "",
        dependencies: "",
        dueDate: "",
        isCompleted: "false",
        location: "",
        task: "",
        urgency: "normal",
        uid: $scope.$parent.getUser()
    };

    $scope.addNewItem = function() {
        ItemStorage.postNewItem($scope.newTask)
            .then(function() {
                $location.url("/items/list");
            });
    };
});
