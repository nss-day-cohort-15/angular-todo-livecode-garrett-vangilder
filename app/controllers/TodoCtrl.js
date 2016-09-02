// THIS IS SIMPLY A NOTE ABOUT HOW TO CREATE SOMETHING. THIS APP NO LONGER USES THIS CTRL
// "use strict";
//
// var app = angular.module("TodoApp");
//
// app.controller("TodoCtrl", function($scope, $location) {
//   $scope.newTask = {};
//
//   $scope.newItem = function() {
//     console.log('new item fired');
//     $location.url('/items/new');
//   };
//
//   $scope.allItem = function() {
//     console.log('all item fired');
//     $location.url('/items/list');
//
//   };
//
//   $scope.addNewItem = function() {
//     $scope.newTask.isCompleted = false;
//     console.log('pushed');
//     $scope.newTask.id = $scope.items.length;
//     $scope.items.push($scope.newTask);
//     $scope.newTask = {};
//   };
//
// });
