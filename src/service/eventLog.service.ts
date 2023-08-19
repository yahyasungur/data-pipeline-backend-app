import EventLogModel, { EventLogDocument, EventLog } from '../model/eventLog.model';
import { FilterQuery } from "mongoose";


export async function createEventLog(input: EventLog) {
    try {
        const eventLog = await EventLogModel.create(input);

        return eventLog.toObject();
    } catch (error: any) {
        throw new Error(error);
    }
}