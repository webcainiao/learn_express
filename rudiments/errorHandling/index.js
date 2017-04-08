const express = require('express');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride())
//在所有挂载和路由之后设置错误处理
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
// app.use(function(err,req,res,next){

// })
app.listen(3000);

//定义函数
function logErrors(err,req,res,next){
	console.error(err.stack);
	next(err);
}

function clientErrorHandler(err,req,res,next){
	if (req.xhr) {
		res.status(500).send({error: 'something failde'});
	} else {
		next(err)
	}
}

function errorHandler(err,req,res,next){
	if (res.headersSent) {
		return next(err);
	}
	res.status(500);
	res.render('error',{error: err});
}