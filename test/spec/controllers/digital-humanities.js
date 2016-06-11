'use strict';

describe('Controller: DigitalHumanitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('mySiteApp'));

  var DigitalHumanitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DigitalHumanitiesCtrl = $controller('DigitalHumanitiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DigitalHumanitiesCtrl.awesomeThings.length).toBe(3);
  });
});
