require('dotenv').config()
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as BodyParser from 'koa-bodyparser'
import * as Logger from 'koa-logger'
import * as cors from 'koa-cors'
import * as db from './services/users.service'


// import * as serve from 'koa-static'
// const mount = require("koa-mount");
// const HttpStatus = require("http-status");



const app = new Koa();
var router = new Router();

const PORT = process.env.PORT || 3000;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

app.listen(3000);

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

app
  .use(router.routes())
  .use(router.allowedMethods())

console.log('Server running on port 3000');