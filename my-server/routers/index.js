const express = require("express");
const md5 = require("blueimp-md5");
const UserModel = require("../models/UserModels");
//获取路由
const router = express.Router();

//登录路由
router.post("/login",(req,res)=>{
	
    const {username,password} = req.body;
	console.log(username,password);
    //数据库查找用户
    UserModel.findOne({
        username,
        password:md5(password)
    })
    .then(user => {
        //用户存在
        if(user){
            //向浏览器返回用户信息
            res.send({
                status:0,
                data:user
            })
        }
        else {
            //登录失败
            res.send({
                status:1,
                mes:"用户名或密码错误"
            })
        }
    })
})

module.exports = router