export const PROPERTIES = {
    PORT: process.env.PORT || 8000,
    ENV: process.env.NODE_ENV || "local",
    VERSION: process.env.VERSION || "",
    APP_NAME: process.env.APP_NAME || "",
    APP_ROOT_CONTEXT: { rootPath: "/api/v1" }
};
