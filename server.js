var https   = require('https');
var express = require('express');
var cons    = require('consolidate');
var path    = require('path');
var fs      = require('fs');

var run = function(config) {
  var app           = express();
  var staticPath    = path.join(__dirname, 'static');
  var generatedPath = path.join(__dirname, '.generated');

  app.configure(function() {
    app.engine('html', cons.qejs);
    app.set('port', config.port);
    app.set('view engine', 'html');
    app.set('views', path.join(__dirname, '/pages'));
    app.use(express.compress());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.favicon(path.join(staticPath, '/images/favicons/fi_favicon.ico')));
    app.use(express.static(staticPath));
    app.use(express.static(generatedPath));
  });

  app.configure('development', function() {
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
  });

  app.configure('production', function() {
    app.use(express.logger());
  });

  //redirect system path urls in sourcemaps
  app.all(staticPath + '/*', function(req, res){
    res.redirect(req.url.replace(staticPath, ''));
  });

  app.get('*.json', function(req, res) {
      res.json(200, req.query);
  });

  app.post('*.json', function(req, res) {
      res.json(200, req.query);
  });

  //default page handler
  app.get('*/', function(req, res){
    res.render('index');
  });

  //generic route handler
  app.get('*', function(req, res){
    res.render(req.url.replace(/^\/?([^?#]+).*$/, '$1'));
  });

  if (!config.ssl){
    app.listen(app.get('port'), function() {
      console.log('Express ' + config.name + ' server listening on port ' + app.get('port'));
    });
  }
  if (config.ssl) {
    https.createServer({
        key : fs.readFileSync(path.join(__dirname, 'node_extras/server.key')).toString(),
        cert: fs.readFileSync(path.join(__dirname, 'node_extras/server.crt')).toString()
      }, app).listen(app.get('port'), function() {
        console.log('Express ' + config.name + ' server listening on port ' + app.get('port'));
    });
  }
};


var server = [];
server.http  = { name: 'http',  ssl: false, port: process.env.PORT     || 3000 };
server.https = { name: 'https', ssl: true,  port: process.env.SSL_PORT || 3001 };

run(server.http);
//run(server.https);
