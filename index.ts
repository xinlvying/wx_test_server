import Application = require("koa")

const Koa = require("koa")
const app: Application = new Koa()

app.use(async ctx => {
  const url = ctx.url
  // 从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring

  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  ctx.body = {
    echostr: req_query.echostr
  }
})

app.listen(3000)
