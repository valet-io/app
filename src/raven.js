'use strict';

import Raven from 'raven-js';
import ngRaven from 'angular-raven';
import config from './config';

Raven.config(config.sentry.dsn).install();

export default ngRaven;
