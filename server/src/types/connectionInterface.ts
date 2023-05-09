import { ConnectOptions } from "mongoose";

export default interface dbOptions extends ConnectOptions {
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean,
}