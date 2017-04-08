const express = require('express');

const app = express();
//设置模板文件目录
app.set('views','./views');
//设置模板引擎
app.set('view engine','pug');//jade被pug替换
//设置路由
app.use('/',function(req,res){
	res.render('index',{title: 'mypug',message: 'hello pug'});//渲染该路由页面
})
app.listen(3000);