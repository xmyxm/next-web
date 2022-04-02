const Koa = require("koa");
const next = require("next");
const Router = require("@koa/router");

const hostname = "localhost";
const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

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
