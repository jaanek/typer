describe('typer directive', function() {
  var element;
  var scope;
  var compile;

  function render(template, _scope_) {
    var el = angular.element(template);
    el = compile(el)(_scope_);

    scope = el.isolateScope();

    scope.$apply();
    return el;
  }

  beforeEach(module('typer'));

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();

    compile = $compile;

    var template = '<typer words="[]" repeat="true"></typer>';

    element = render(template, $scope);
  }));

  it('should be defined', function() {
    expect(scope).to.be.defined;
    expect(element).to.be.defined;
  });

  it('should contain an array of words', function() {
    expect(scope.words).to.be.instanceof(Array);
  });

  it('should have a repeat setting', function () {
    expect(scope.repeat).to.be.true;
  });

});
