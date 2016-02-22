'use strict';

angular.module('hotOrNot',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/VotableEnts',{templateUrl:'views/VotableEnt/search.html',controller:'SearchVotableEntController'})
      .when('/VotableEnts/new',{templateUrl:'views/VotableEnt/detail.html',controller:'NewVotableEntController'})
      .when('/VotableEnts/edit/:VotableEntId',{templateUrl:'views/VotableEnt/detail.html',controller:'EditVotableEntController'})
      .when('/VotableEnts/rate/:VotableId',{templateUrl:'views/VotableEnt/voter.html',controller:'EditVotableEntController'}) 
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
