/* express的路由 */

//1. 导入express
var express = require('express')

//2. 创建express服务器
var server = express()

//3. 访问服务器(get或者post)
//参数一: 请求根路径
//3.1 get请求
server.get('/', function (request, response, next) {
    // 函数一定要添加next参数，一定要调用next(),才会进行下面操作，代码使一行一行执行，解释性语言
    console.log(request)
    console.log('从据库获取数据')
    next()
}, function (request, response) {
    response.send('get请求成功 Router')

})

//3. 绑定端口
server.listen(4041)
console.log('启动4041 expressRouter')