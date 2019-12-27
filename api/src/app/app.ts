import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

export class ApplicationMiddleware {
    private _app: express.Application;

    constructor() {
        this._app = express();
        this._initApplicationMiddleware();
    }

    private _initApplicationMiddleware(): void {
        this._app.use(cors());
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: false }));
    }
}
