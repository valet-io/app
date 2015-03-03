'use strict';

import parse from 'confidential-divshot';

export default parse({
  firebase: {
    endpoint: {
      property: 'firebase__endpoint'
    }
  },
  valet: {
    api: {
      property: 'valet__api'
    }
  }
});
