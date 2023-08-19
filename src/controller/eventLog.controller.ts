import { Request, Response } from 'express';
import logger from '../utils/logger';
import { createEventLog } from '../service/eventLog.service';
import { CreateEventLogInput } from '../schema/eventLog.schema';

export async function createEventLogHandler(
    req: Request<{}, {}, CreateEventLogInput['body']>, 
    res: Response
) {
    try{
        const eventLog = await createEventLog(req.body);
        return res.send(eventLog);
    } catch (error) {
        logger.error(error);
        return res.status(409).json({ message: 'Conflict :" + error.message' }); // TODO: Change status code
    }
}