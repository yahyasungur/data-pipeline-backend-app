import { Express, Request, Response } from "express";
import { createEventLogHandler } from "./controller/eventLog.controller";
import validate from "./middleware/validateResource";
import { createEventLogSchema } from "./schema/eventLog.schema";

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.post('/api/event-log', validate(createEventLogSchema), createEventLogHandler);
}

export default routes;