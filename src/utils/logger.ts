import logger from "pino";
import dayjs from "dayjs";

const log = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    },
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().date()}/${dayjs().month() + 1}/${dayjs().year()} ${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}"`,
})

export default log;
