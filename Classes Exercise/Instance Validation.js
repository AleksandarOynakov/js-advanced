class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId) {
        if (!/^\d{6}$/.test(clientId)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = clientId;
    }
    get clientId() {
        return this._clientId;
    }

    set email(email) {
        if (!(/[a-zA-Z0-9]+\@[a-zA-Z.]+/).test(email)) {
            throw new TypeError("Invalid e-mail");
        } else {
            this._email = email;
        }
    }

    set firstName(firstName) {
        if (!(firstName.length >= 3 && firstName.length <= 20)) {
            throw new TypeError("First name must be between 3 and 20 characters long")
        } else if (!(/[a-zA-Z]/).test(firstName)) {
            throw new TypeError("First name must contain only Latin characters")
        } else {
            this._firstName = firstName;
        }
    }

    set lastName(lastName) {
        if (!(lastName.length >= 3 && lastName.length <= 20)) {
            throw new TypeError("Last name must be between 3 and 20 characters long")
        } else if (!(/[a-zA-Z]/).test(lastName)) {
            throw new TypeError("Last name must contain only Latin characters")
        } else {
            this._lastName = lastName;
        }
    }
}


let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')


// ⦁	clientId - Must be a string representing a 6-digit number; if invalid, throw a TypeError
//  with the message "Client ID must be a 6-digit number"

// ⦁	email - Must contain at least one alphanumeric character, 
// followed by the @ symbol, followed by one or more letters or periods;
//  all letters must be Latin; if invalid, throw a TypeError with message "Invalid e-mail"

// ⦁	firstName, lastName - Must be at least 3 and at most 20 characters long, containing only Latin letters; 
// ⦁	If the length is invalid, throw a TypeError with message:
// "{First/Last} name must be between 3 and 20 characters long"
// ⦁	 If invalid characters are used, throw a TypeError with message:
// "{First/Last} name must contain only Latin characters" (replace First/Last with the relevant word)
// All checks must happen in the order in which they are listed - 
// if more than one parameter is invalid, throw an error for the first encountered. 
// Note that error messages must be exact.
// Submit your solution containing a single class definition.