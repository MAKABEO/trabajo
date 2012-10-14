var express = require('express');
var cons = require('consolidate');
var swig = require('swig');

var auth = require('./autentificacion');

var app = express();

app.set('port', process.env.PORT || 3000);

app.engine('html', cons.swig);

app.set('view engine', 'html');
app.set('views', __dirname);

swig.init
({ 
	root: __dirname,
	allowErrors: true
});

app.set('view options', { layout: false });

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.cookieParser());
app.use
(
	express.cookieSession
	({
  		username : "",
  		islogged : false,
  		secret : "secret"
	})
);

app.use(app.router);
app.use(express.static(__dirname)); // Establecemos directorio root

app.get('/', gets.root);
app.get('/:id.ntml', gets.general);

app.post('/auth', auth.registro);

app.listen(app.get('port'));
console.log('Express server listening on port 3000');