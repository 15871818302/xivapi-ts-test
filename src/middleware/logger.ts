import { Context } from 'koa'

const logger = function () {
  return async (ctx: Context, next: () => Promise<void>) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} ${ctx.status} -- ${ms}ms`)
  }
}

export default logger
