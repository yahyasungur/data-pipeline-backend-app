import mongoose from "mongoose";
import config from "config";

async function connect() {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        console.log('Database connected');
    } catch (error) {
        console.log('db error', error);
        process.exit(1);
    }
}

export default connect;
