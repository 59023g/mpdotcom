'use strict';

var express = require('express'),
  path = require('path'),
  mongoStore = require('connect-mongo')(express),
  config = require('./config');

/**
 * Express configuration
 */


module.exports = function(app) {
  app.set('showStackError', true);

  // Development config
  app.configure('development', function() {
    app.use(express.logger('dev'));
    app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'app')));

    app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));

    app.set('views', config.root + '/app/views');

  });

  // Production config
  app.configure('production', function() {
    app.use(express.favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('views', config.root + '/views');
  });

  //app.enable('jsonp callback');
  // All config
  app.configure(function() {


    app.use(express.cookieParser());

    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.methodOverride());

    app.use(express.session({
      secret: 'secret',
      store: new mongoStore({
        url: config.mongo.uri,
        collection: 'sessions'
      }, function() {
        console.log("db connection open");
      })
    }));

    app.use(require('stylus').middleware(path.join(config.root, 'public')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    //


    // Router needs to be last
    app.use(app.router);

    app.use(function(err, req, res, next) {
      // Treat as 404
      if (err.message.indexOf('not found')) return next();

      // Log it
      console.error(err.stack);

      // Error page
      res.status(500).render('500', {
        error: err.stack
      });
    });

    app.use(function(req, res) {
      res.status(404).render('404', {
        url: req.originalUrl,
        error: 'Not found'
      });
    });

  });
};
