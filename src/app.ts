import expres from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

const PORT = config.get<number>('port') || 8091;

const app = expres();

app.listen(PORT, async () => {
    logger.info(`Server is running at http://localhost:${PORT}`);

    //await connect();

    routes(app);
});