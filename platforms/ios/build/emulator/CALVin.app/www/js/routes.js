angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('cALVin', {
    url: '/page1',
    templateUrl: 'templates/cALVin.html',
    controller: 'cALVinCtrl'
  })

  .state('cALVin2', {
    url: '/page2',
    templateUrl: 'templates/cALVin2.html',
    controller: 'cALVin2Ctrl'
  })

  .state('about', {
    url: '/page3',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('contactUs', {
    url: '/page4',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('fAQs', {
    url: '/page5',
    templateUrl: 'templates/fAQs.html',
    controller: 'fAQsCtrl'
  })

  .state('highFront', {
    url: '/page6',
    templateUrl: 'templates/highFront.html',
    controller: 'highFrontCtrl'
  })

  .state('open', {
    url: '/page7',
    templateUrl: 'templates/open.html',
    controller: 'openCtrl'
  })

  .state('centralLowBack', {
    url: '/page8',
    templateUrl: 'templates/centralLowBack.html',
    controller: 'centralLowBackCtrl'
  })

  .state('back', {
    url: '/page9',
    templateUrl: 'templates/back.html',
    controller: 'backCtrl'
  })

  .state('diphthongs', {
    url: '/page10',
    templateUrl: 'templates/diphthongs.html',
    controller: 'diphthongsCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});