const express = require('express');
const app = express();
const birds = require('./birds.js');

app.get('/',function(req,res){
	res.send('Get request to Homepage');
})
app.post('/',function(req,res){
	res.send('Post request to Homepage');
})
app.get('/abc',function(req,res){

})
//字符串模式
//匹配/abcdb,/abdb
app.get('/abc?db',function(){})
//匹配/abcd,/abbcd,/abbbcd,等等
app.get('/ab+cd',);
///abxcd,/abddcd,/abSSSScd,and so on
app.get('ab*cd')
///abcdef,/abef
app.get('ab(cd)?ef')
///ab.d
app.get('ab.d')
///ab-d
app.get('ab-d')
//regexp
///a/
app.get(/a/)
///xxxfly,/dddfly,/sfdfdfly,so on
app.get(/.*fly$/)
//route parameters
// route path : /users/:userID/books/:bookID
// request url: http://localhost:3000/users/123/books/456
// req.params   {'userID':'123','bookID':'456'}
app.get('/users/:userID/books/:bookID',function(req,res){
	res.send(req.params)
})
//since the hyphen -  and dot . are interpreted literally,so ..
// route path :  /flights/:from-:to
// request url :  http: //localhost:3000/flights/henan-shanghai
// req.params:   {'from': 'henan','to': 'shanghai'}

// route path :  /flights/:from.:to
// request url :  http: //localhost:3000/flights/henan.shanghai
// req.params:   {'from': 'henan','to': 'shanghai'}
// the name of req.params must be made of 'word characters' [a-zA-Z0-9]

//route handlers
app.get('xx',function(){})//single function
app.get('xx',function(){//multiple functions
	//xxx
	next();
},//...
function(){
	//.....最后一个不需要next()
})
app.get('xx',[a,b,c])//a,b,c都是函数，除最后一个函数，其他函数里需要添加next()

//app.route
app.route('/xx')
	.get(function(){})
	.post(funciton(){});


//express.Router可挂在路由实例到指定的路由
app.use('/birds',birds)
//http的方法get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect
app.all('/xxx',function(req,res,next){//所有对该路由的http请求，都执行此方法的回调函数
	console.log('xxxxxx');
	next();
})