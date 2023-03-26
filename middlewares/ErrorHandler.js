class ErrorHanler {
    static error(app) {
        app.use(async (ctx, next) => {
            try {
                await next();
                if(ctx.status === 404){
                    ctx.body = "404 页面"
                }
            } catch (error) {
                ctx.body = "日志打点上报"
            }
        })
    }
}

module.exports = ErrorHanler;