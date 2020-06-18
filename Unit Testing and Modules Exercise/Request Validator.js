function validator(inputObj) {
    let { method, uri, version, message } = inputObj;

    function isValidMessage(message) {
        let validPattern = /^[^\<\>\\\&\'\"]*$/;
        if (!validPattern.test(message) || message === undefined) {
            throw new Error('Message');
        }
    }

    function isValidVersion(version) {
        let valid = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        if (!valid.includes(version)) {
            throw new Error('Version');
        }
    }

    function isValidUri(uri) {
        let validPattern = /[\.a-z0-9]+\.[\.a-z0-9]*/;
        if (!(validPattern.test(uri) || uri === '*') || uri === undefined || uri.length === 0) {
            console.log(uri)
            throw new Error('URI');

        }
    }

    function isValidMethod(method) {
        let valid = ['GET', 'POST', 'DELETE', 'CONNECT'];
        if (!valid.includes(method)) {
            throw new Error('Method');
        }
    }

    try {

        isValidMethod(method);
        isValidUri(uri);
        isValidVersion(version);
        isValidMessage(message);

        return inputObj;
    } catch (e) {
        throw new Error(`Invalid request header: Invalid ${e.message}`);
    }
}

console.log(validator({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}));