import Router from 'koa-router'

// 创建路由实例
const router = new Router({
  // 设置接口前缀
  prefix: '/api'
})

// 创建测试接口
router.get('/test', async (ctx) => {
  ctx.body = 'test'
})

export default router
