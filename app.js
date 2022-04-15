const Koa = require("koa");
const next = require("next");
const Router = require("@koa/router");

const hostname = "localhost";
const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 4000;
const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

// nextjs 无法直接处理服务端
// 数据接口
// 数据库连接
// session 状态

// 这里必须启动静态资源服务后才能去启动koa
app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.all("(.*)", async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
