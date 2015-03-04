'use strict';

import template from './views/donor.html';

export default function () {
  return {
    scope: {
      pledge: '='
    },
    template
  };
}
