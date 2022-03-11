const Koa = require("koa");
const next = require("next");

const dev = process.env.NODE_ENV !== "production"; // 判断是否处于开发者状态
const app = next({ dev }); // 根据当前的环境状态（dev或prod），初始化 next.js
const handle = app.getRequestHandler(); // 拿到 http 请求的响应
const port = process.env.PORT || 3000;

// app.prepare：编译 pages 文件夹下面的页面文件，确保 pages 下页面全部编译完了之后，我们才能真正的启动服务来响应请求。
// 如果这些内容没有编译完成，那么启动服务响应请求的时候可能会报错。
app.prepare().then(() => {
  const server = new Koa(); // 声明一个 server

  /** 这是 Koa 的核心用法：中间件。通常给 use 里面写一个函数，这个函数就是中间件。
   * params:
   *  ctx: Koa Context 将 node 的 request 和 response 对象封装到单个对象中，为请求上下文对象
   *  next: 调用后将执行流程转入下一个中间件，如果当前中间件中没有调用 next，整个中间件的执行流程则会在这里终止，后续中间件不会得到执行
   */
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.response = false;
  });

  server.listen(port, "127.0.0.1");
});
