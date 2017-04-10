const express = require('express');
const app = express();
//设置路由之前，挂载中间件
app.use(myLogger);//每次对路由的请求都执行中间件函数
app.use(times);
app.use('/users/:id',function(req,res,next){
	console.log(' this method is ' + req.method)
	console.log(' this id is ' + req.params.id)
	next()
},function(req,res,next){
	console.log('this originalUrl ' + req.originalUrl)
	next()
})
// app.use('/users/:id',function(req,res,next){
// 	res.send('ssssss')
// })
//
// app.get('/',function(req,res){
// 	res.send('hello home page')
// })
app.get('/',function(req,res){
	res.send(req.requestTime + '+' + res.responseTime)
})
app.get('/users/:id',function(req,res,next){
	console.log(req.params.id)
	// next()
	next('route')//此方法只能用在app.Method() or router.Method()
},function(req,res,next){
	res.send('abc')
})
app.get('/users/:id',function(req,res){
	res.send( ' ss')
})

function myLogger(req,res,next){
	//.....
	console.log('logger');
	next();
}
function times(req,res,next){
	req.requestTime = Date.now();
	res.responseTime = Date.now();
	next()
}

app.listen(3000)