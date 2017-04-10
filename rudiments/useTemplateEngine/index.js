const express = require('express');
const fs = require('fs');//the engine requests the fs module

const app = express();
//设置模板文件目录
app.set('views','./views');
//设置模板引擎
app.set('view engine','pug');//jade被pug替换
//设置路由
app.use('/user',function(req,res){
	res.render('user/user',{title: 'mypug',message: 'hello pug'});//渲染该路由页面
})
app.listen(3000);


//自定义模板
// app.set('view engine','ntl');//设置模板引擎ntl
// app.engine('ntl',function(filepath,options,callback){//自定义ntl模板
// 	fs.readFile(filepath,function(err,content){
// 		if (err) return callback(err)
// 		var rendered = content.toString().replace('#title#','<title>'+options.title+'</title>')
// 					.replace('#message#','<h1>'+options.message+'</h1>')
// 		return callback(null,rendered)
// 	})
// })
// app.use('/',function(req,res){
// 	res.render('index',{title:'myntl',message: 'hello ntl'});//渲染模板目录中的视图
// })
