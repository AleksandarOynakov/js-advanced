class Request {
    constructor(method, uri, version, message) {
        this.method = String(method);
        this.uri = String(uri);
        this.version = String(version);
        this.message = String(message);
        this.response = undefined;
        this.fulfilled = false;
    }
}
