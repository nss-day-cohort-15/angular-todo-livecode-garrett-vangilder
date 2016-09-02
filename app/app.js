"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
.constant("FirebaseURL", "https://ng-todo-demo-2020b.firebaseio.com");

app.config(function($routeProvider) {
    $routeProvider.
    when('/items/list', {
        templateUrl: 'partials/item-list.html', //Capital U lowercase rlewr
        controller: 'ItemListCtrl'
    }).
    when('/items/new', {
        templateUrl: 'partials/item-form.html',
        controller: 'ItemNewCtrl'
    }).
    when("/items/view/:itemId", {
        templateUrl: "partials/item-details.html",
        controller: "ItemViewCtrl"
    }).
    when("/items/edit/view/:itemId", {
      templateUrl: "partials/item-edit.html",
      controller: "ItemEditCtrl"
    }).
    otherwise('/items/list');
});
