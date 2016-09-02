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
    otherwise('/items/list');
});
