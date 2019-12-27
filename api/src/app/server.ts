import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { Application } from "express";

export class Server {
    private _expressServer: InversifyExpressServer;
    private _ioc: Container;
    private _app: Application;
}
