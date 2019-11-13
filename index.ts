import Application = require("koa")

const Koa = require("koa")
const app: Application = new Koa()

app.use(async (ctx: Application.BaseContext) => {
  ctx.body = "wx_dev_test"
})

app.listen(3000)
