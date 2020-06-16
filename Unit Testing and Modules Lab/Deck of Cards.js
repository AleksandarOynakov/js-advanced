function printDeckOfCards(cards) {
    let deck = [];
    let error = false;
    for (const cardElem of cards) {
        let suit = cardElem.slice(-1);
        let face = cardElem.slice(0, cardElem.length - 1);
        try {
            let newCard = card(face, suit);
            deck.push(newCard.toString().join(''));
        } catch (e) {
            error = true;
            console.log(`Invalid card: ${face}${suit}`);
        }
    }
    if (!error) {
        console.log(deck.join(' '));
    }


    function card(face, suit) {
        let validFace = {
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            'J': 'J',
            'Q': 'Q',
            'K': 'K',
            'A': 'A'
        };
        let validSuit = { 'S': '♠', 'H': '♥', 'D': '♦', 'C': '♣' };

        class Card {
            constructor(face, suit) {
                this.face = validFace[face];
                this.suit = validSuit[suit];
            }

            toString() {
                return [this.face, this.suit];
            }
        }
        let newCard = new Card(face, suit);
        if (newCard.face === undefined || newCard.suit === undefined) {
            throw new ReferenceError('Error');
        }
        return newCard;
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);