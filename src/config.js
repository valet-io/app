'use strict';

import parse from 'confidential-divshot';

export default parse({
  firebase: {
    endpoint: {
      key: 'firebase__endpoint'
    }
  },
  valet: {
    api: {
      key: 'valet__api'
    }
  },
  sentry: {
    dsn: {
      key: 'sentry__dsn'
    }
  }
});
