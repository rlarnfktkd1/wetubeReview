import routes from "../routes/routes"
export const localsMiddlewares = (req, res, next) => {
    res.locals.siteName = "Wetube"
    res.locals.routes = routes
    next()
};