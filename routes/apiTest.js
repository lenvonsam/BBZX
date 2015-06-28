//接口测试
var express = require('express');
var router = express.Router();
var AV = require('leanengine');
var http = require('http');
var request = require('request');

router.get('/index',function(req,res,next){
	// res.cookie('xxx','你好吗',{maxAge:9000000});
	res.render('test',{title:'123'});	
});

router.get('/', function(req, res, next) {
	// res.render('test',{title:'123'});
	var cookieUser = req.cookies.ni;
	console.log(typeof cookieUser);
	if(cookieUser == undefined) {
		console.log('123');
	}
	console.log('cookieUser:'+cookieUser);

	// AV.Cloud.httpRequest({
	// 	url:'http://218.93.126.104:5657/Login/',
	// 	params: {
 //    	MobileNo : '18651618526',
 //    	LoginPwd : '695353',
 //    	UserTypeID : '1',
 //    	SchoolID : '0'
 //  		},
 //  		success: function(httpResponse) {
 //    		console.log(httpResponse.text);
 //    		console.log(typeof httpResponse.text);
 //    		console.log(httpResponse.data);
 //    		res.send(httpResponse.text);
 //  		},
 //  		error: function(httpResponse) {
 //    		console.error('Request failed with response code ' + httpResponse.status+';text:'+httpResponse.text);
 //    		res.send('error');
 //  		}
	// });
	res.send({returnCode:1});
	
});

router.get('/loginTest',function(req,res,next){
	var x = req.cookies.xxx;	
	console.log('<<<<<xx:'+x);
	res.render('todos',{title:'123'});
});

module.exports = router;