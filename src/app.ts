import Koa from 'koa'
import * as http from 'http'
import initCore from './utils/init'
import logger from './middleware/logger'

// 创建 koa 实例
const app = new Koa()

// 创建服务器
const server: http.Server = new http.Server(app.callback())

app.use(logger())

// 初始化中间件
initCore(app, server)

// 中间件
app.use(async (ctx) => {
  ctx.body = 'hello world'
})

// 启动服务
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
