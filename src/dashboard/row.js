'use strict';

export function row () {
  return {
    restrict: 'A',
    require: 'pledgeRow',
    controller: Row,
    link: function (scope, element, attributes, row) {
      element.on('click', function () {
        scope.$apply(row.toggle);
      });
      // element.on('click', row.remove);
    } 
  };
}

Row.$inject = ['$element', '$animate'];
function Row ($element, $animate) {
  let content;
  this.setContent = function (element) {
    const wrapper = angular.element('<div class="row-extra-content"></div>');
    content = wrapper
      .append(element)
      .wrap(`<td colspan="${$element.children().length - 1}"></td>`)
      .parent()
      .wrap('<tr class="row-extra"></tr>')
      .parent();
  };
  this.active = false;
  this.enter = () => {
    return $animate.enter(content, $element.parent(), $element)
      .then(() => {
        this.active = true;
      });
  };
  this.leave = () => {
    return $animate.leave(content)
      .then(() => {
        this.active = false;
      });
  };
  this.toggle = () => {
    return this[!this.active ? 'enter' : 'leave']();
  };
}

export function extra () {
  return {
    restrict: 'A',
    require: '^pledgeRow',
    compile: function (element) {
      element.css('display', 'none');
      return function (scope, element, attributes, row) {
        row.setContent(element.contents());
        element.remove();
      };
    }
  };
}
