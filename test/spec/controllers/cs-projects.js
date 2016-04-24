'use strict';

describe('Controller: CsProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('mySiteApp'));

  var CsProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CsProjectsCtrl = $controller('CsProjectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CsProjectsCtrl.awesomeThings.length).toBe(3);
  });
});
