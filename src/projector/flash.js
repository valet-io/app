module.exports = function ($animate) {
  return {
    restrict: 'EA',
    link: function (scope, element, attributes) {
      scope.$watch(attributes.flash, function (newVal, oldVal) {
        console.log(newVal, oldVal);
        if (newVal !== oldVal) {
          $animate.addClass(element, 'flash')
            .then(function () {
              element.removeClass('flash');
            });
        }
      });
    }
  }
};
module.exports.$inject = ['$animate'];
