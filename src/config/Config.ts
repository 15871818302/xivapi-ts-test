/*
* 模块配置
* */
const dotenv = require('dotenv')

dotenv.config()

const isDev = process.env.NODE_ENV === 'development'

export default class Config {
  // 服务器端口
  public static readonly PORT = process.env.PORT
  // 接口前缀
  public static readonly PREFIX = process.env.PREFIX
  // 根目录
  public static readonly BASE = isDev ? 'src' : 'dist/src'
}
