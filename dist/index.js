class Card {
    suit;
    value;
    intValue;
    constructor(suit, value, intValue) {
        this.suit = suit;
        this.value = value;
        this.intValue = intValue;
    }
    getCardString() {
        return this.suit + this.value + "(" + this.intValue + ")";
    }
}
class Deck {
    deck;
    constructor() {
        this.deck = Deck.generateDeck();
    }
    static generateDeck() {
        let newDeck = [];
        const suits = ["♣", "♦", "♥", "♠"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                newDeck.push(new Card(suits[i], values[j], j + 1));
            }
        }
        return newDeck;
    }
    draw() {
        return this.deck.pop();
    }
    printDeck() {
        console.log("Displaying cards...");
        for (let i = 0; i < this.deck.length; i++) {
            console.log(this.deck[i].getCardString());
        }
    }
    shuffleDeck() {
        let deckSize = this.deck.length;
        for (let i = deckSize - 1; 0 <= i; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
}
class Dealer {
    static startGame(amountOfPlayers) {
        let table = {
            "players": [],
            "deck": new Deck()
        };
        table["deck"].shuffleDeck();
        for (let i = 0; i < amountOfPlayers; i++) {
            let playerCard = [];
            // ブラックジャックの手札は2枚
            for (let j = 0; j < 2; j++) {
                playerCard.push(table["deck"].draw());
            }
            table["players"].push(playerCard);
        }
        return table["players"];
    }
}
let table1 = Dealer.startGame(4);
console.log(table1);
export {};
