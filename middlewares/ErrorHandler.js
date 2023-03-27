class ErrorHanler {
    static error(app,logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
                if (ctx.status === 404) {
                    ctx.body = "404 页面";
                    logger.error(error.message);
                }
            } catch (error) {
                ctx.body = "日志打点上报";
                logger.error(error);
            }
        })
    }
}

export default ErrorHanler;
