/*
 * 用于初始化中间件
 * */

import Koa from 'koa'
import * as http from 'http'
import KoaBodyParser from 'koa-bodyparser'
import router from '../router'

// 初始化中间件类
class init {
  public static app: Koa<Koa.DefaultState, Koa.DefaultContext>
  public static server: http.Server
  // 解析body参数
  public static loadBodyParser() {
    init.app.use(KoaBodyParser())
  }
  public static initCore(app: Koa<Koa.DefaultState, Koa.DefaultContext>, server: http.Server) {
    init.app = app
    init.server = server
    init.loadBodyParser()
    init.initLoadRoutes()
  }

  // 挂载路由实例
  static async initLoadRoutes () {
    // const dirPath = path.join(`${process.cwd()}\\${Config.BASE}\\router\\`)
    // await getAllFileExport(dirPath, (file: Router) => {
      init.app.use(router.routes())
    // })
  }
}

export default init.initCore
