const express = require('express');
const app = express();
const router  = express.Router();

router.use(function(req,res,next){
	console.log('birds time '+ Date.now());
	// next('router')
	next()
})
router.use(function(req,res,next){
	console.log(123456)
	next()
})
router.get('/',function(req,res,next){
	// res.send('request to /birds')
	console.log('this is birds')
	next('route')
},function(req,res){
	res.send('end')
})
router.get('/',function(req,res,next){
	next('route')
	console.log('ddd')//此命令继续执行
	// res.send('request to /birds')
})
router.get('/',function(req,res){
	res.send('123')
})
router.get('/about',function(req,res){
	res.send('this path is request to  /birds/about')
})
app.get('/',function(req,res){
	res.send('home page')
})
app.get('/admin',function(req,res){//注意这里的router,访问此路径时，可使用router的中间件
	res.send('this is admin ' + Date.now())
})
app.use(function(err,req,res,next){
	console.error(err.stack)
	res.status(500).send('something broken')
})
app.use('/birds',router)//挂载路由实例中间件到路由
app.listen(3000)//只有app可以使用listen方法
// module.exports = router;
