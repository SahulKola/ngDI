import { Logger } from "../logger";

export const legacyLogger: Logger = {
    _prefix: 'root',
    log(msg: string): void {
        console.log(`${this._prefix} (legacy): ${msg}`);
    }
}