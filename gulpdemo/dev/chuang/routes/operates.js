var express = require('express');
var router = express.Router();
var operatesDbConne = require("./../db/operatesDbConne");

/* GET users listing. */
router.get('/', function(req, res, next) {
	//连接数据库，然后返回需要的对象
	//去数据库中查找数据，并且将值返回给data 


	operatesDbConne.find((data)=>{
  		res.send(data);
	});
});
module.exports = router;
