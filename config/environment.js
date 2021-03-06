/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'titlematch-web',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.API_NAMESPACE = '';
    ENV.APP.API_HOST = 'http://localhost:5000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy['connect-src'] = "http://localhost:5000 http://localhost:4200";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.APP.API_HOST = 'http://staging-bracketfun-api.herokuapp.com/';
    ENV.APP.API_NAMESPACE = '';
    ENV.contentSecurityPolicy['connect-src'] = "http://staging-bracketfun-api.herokuapp.com/";
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'http://bracketfun-api.herokuapp.com/';
    ENV.APP.API_NAMESPACE = '';
    ENV.contentSecurityPolicy['connect-src'] = "http://bracketfun-api.herokuapp.com/";
  }

  return ENV;
};
