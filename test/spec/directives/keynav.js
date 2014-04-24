'use strict';

describe('Directive: keyNav', function () {

  // load the directive's module
  beforeEach(module('doUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<key-nav></key-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the keyNav directive');
  }));
});
