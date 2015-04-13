'use strict';

import Raven from 'raven-js';
import ngRaven from 'angular-raven';
import {sentry} from './config';

Raven.config(sentry.dsn).install();

export default ngRaven;
