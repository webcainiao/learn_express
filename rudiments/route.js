const express = require('express');
const app = express();

app.get('/',function(req,res){
	res.send('Get request to Homepage');
})
app.post('/',function(req,res){
	res.send('Post request to Homepage');
})
//http的方法get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect
app.all('/xxx',function(req,res,next){//所有对该路由的http请求，都执行此方法的回调函数
	console.log('xxxxxx');
	next();
})