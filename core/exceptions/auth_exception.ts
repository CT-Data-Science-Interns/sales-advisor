import Exception from "../interfaces/exception.interface";

export default class AuthException extends Error implements Exception {
    // Fields
    private _code: string;
    private _message: string;
    private _stackTrace: Object | null;

    // Constructor
    constructor({ code, message, stackTrace }: {
        code: string, message: string, stackTrace: Object | null
    }) {
        super(message);

        this._code = code;
        this._message = message;
        this._stackTrace = stackTrace;
    }

    // Getters
    get code(): string { return this._code; }
    get message(): string { return this._message; }
    get stackTrace(): Object | null { return this._stackTrace; }
}