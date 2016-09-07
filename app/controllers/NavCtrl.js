"use strict";

var app = angular.module("TodoApp");

app.controller("NavCtrl", function($scope, SearchTermData, $location) {
    $scope.searchText = SearchTermData;
    $scope.navItems = [{
        url: "#/logout",
        name: "Logout",
        showState: "$parent.isLoggedIn"
    },{
        url: "#/items/login",
        name: "Login",
        showState: "!$parent.isLoggedIn"
    },
     {
        url: "#/items/list",
        name: "All Items",
        showState: "$parent.isLoggedIn"

    }, {
        url: "#/items/new",
        name: "New Items",
        showState: "$parent.isLoggedIn"

    }];
    $scope.isActive = (viewLocation) => viewLocation === $location.path();

});
