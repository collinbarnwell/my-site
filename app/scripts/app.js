'use strict';

/**
 * @ngdoc overview
 * @name mySiteApp
 * @description
 * # mySiteApp
 *
 * Main module of the application.
 */
angular
  .module('mySiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
	redirectTo: '/about'
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl',
        // controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cs-projects', {
        templateUrl: 'views/cs-projects.html',
        controller: 'CsProjectsCtrl',
        controllerAs: 'csProjects'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
