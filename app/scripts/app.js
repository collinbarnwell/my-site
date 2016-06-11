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
  .config(function ($routeProvider, $locationProvider) {
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
      .when('/digital-humanities', {
        templateUrl: 'views/digital-humanities.html',
        controller: 'DigitalHumanitiesCtrl',
        controllerAs: 'digitalHumanities'
      })
      .otherwise({
        redirectTo: '/'
      });

    // $locationProvider.html5Mode(true);
  });
