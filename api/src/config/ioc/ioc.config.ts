import { AsyncContainerModule, interfaces } from "inversify";
import { LoadControllersAsync } from "./ioc.module_loader";

export const IOC_MODULE_CONFIG = new AsyncContainerModule(
    async (bind: interfaces.Bind) => {
        try {
            await LoadControllersAsync();
        } catch (err) {
            throw new Error("Error Loading IOC Config Module");
        }
    }
);
