export interface Logger {
    _prefix: string;
    log(msg: string): void;
}
