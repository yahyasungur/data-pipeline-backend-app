import mongoose from "mongoose";

export interface EventLogDocument extends mongoose.Document {
    type: string;
    session_id: string;
    event_name: string;
    event_time: number;
    page: string;
    country: string;
    region: string;
    city: string;
    user_id: string;
    createdAt: Date;
    updatedAt: Date;
}

const eventLogSchema = new mongoose.Schema(
    {
        type: { type: String, required: true },
        session_id: { type: String, required: true },
        event_name: { type: String, required: true },
        event_time: { type: Number, required: true },
        page: { type: String, required: true },
        country: { type: String, required: true },
        region: { type: String, required: true },
        city: { type: String, required: true },
        user_id: { type: String, required: true }
    }, 
    { 
        timestamps: true 
    }
);

const EventLogModel = mongoose.model('EventLog', eventLogSchema);

export default EventLogModel;