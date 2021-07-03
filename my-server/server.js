const mongoose = require("mongoose");
const express = require("express");
const indexRouter = require("./routers");
const app = express();

//解析post请求中间件
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

//声明使用路由器中间件
app.use('/', indexRouter);
//连接数据库
mongoose.connect("mongodb://localhost/admin", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("数据库连接成功")
		app.listen('5000', () => {
			console.log("server is running");
		})
	})
