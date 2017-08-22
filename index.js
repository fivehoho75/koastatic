const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser'); 
const logger = require('koa-logger');

app.use( bodyParser() ); 
app.use( logger() );

// $ GET /package.json
app.use(serve('.'));

// $ GET /hello.txt
app.use(serve('build'));

// or use absolute paths
app.use(serve(__dirname + '/build'));

app.listen(3000);

console.log('listening on port 3000');