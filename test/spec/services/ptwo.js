'use strict';

describe('Service: pTwo', function () {

  // load the service's module
  beforeEach(module('doUiApp'));

  // instantiate service
  var pTwo;
  beforeEach(inject(function (_pTwo_) {
    pTwo = _pTwo_;
  }));

  it('should do something', function () {
    expect(!!pTwo).toBe(true);
  });

});
