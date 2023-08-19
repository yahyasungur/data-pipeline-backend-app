import { type } from "os"
import { TypeOf, number, object, string } from "zod"

export const createEventLogSchema = object({
    body: object({
        user_id: string({
            required_error: 'User ID is required'
        }),
        session_id: string({
            required_error: 'Session ID is required'
        }),
        type: string({
            required_error: 'Type is required'
        }),
        event_name: string({
            required_error: 'Event name is required'
        }),
        event_time: number({
            required_error: 'Event time is required'
        }),
        page: string({
            required_error: 'Page is required'
        }),
        country: string({
            required_error: 'Country is required'
        }).max(4, 'Country code must be 4 characters at most'),
        region: string({
            required_error: 'Region is required'
        }),
        city: string({
            required_error: 'City is required'
        })
    })
})

export type CreateEventLogInput = TypeOf<typeof createEventLogSchema>;

