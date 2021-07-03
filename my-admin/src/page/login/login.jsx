import React, {Component} from "react";
import {Form, Input, Button,message} from "antd";
import axios from "axios";
import "./login.less";
import logo from "../../assets/images/logo.png";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reqLogin } from "../../api/index.js"
class Login extends Component {
    onFinish = async (value)=>{
        const {username,password} = value;
		const result = await reqLogin(username,password);
		if(result.status === 0){
			message.success("登录成功");
            this.props.history.replace("/");
		}else {
			message.error("账号或密码错误");
		}
    }
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt={""}/>
                    <h1>React后台管理项目</h1>
                </header>
                <section className={"login-content"}>
                    <h2>用户登录</h2>
                    <Form className={"login-form"} onFinish={this.onFinish}>
                        <Form.Item
                            name="username"
                            initialValue={"admin"}
                            rules={[
                                {
                                    required: true,
                                    whitespace:true,
                                    message: '请输入用户名',
                                },
                                {
                                    min:4,
                                    message:"用户名至少4位"
                                },{
                                max:12,
                                    message:"用户名至多12位"
                                },{
                                    pattern:/^[a-zA-Z0-9_]+$/,
                                    message:"用户名必须是英文、中文、下划线组成"
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined  />} placeholder={"用户名"} />
                        </Form.Item>
                        <Form.Item

                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                            ]}

                        >
                            <Input prefix={<LockOutlined/>} placeholder={"密码"}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>

                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

export default Login;