'use strict';

/**
 * A simple game of blackjack
 */

/**
 * A card
 * @constructor
 * @param {string} suit - The suit of the card.
 * @param {string} name - The name of the card.
 * @param {number} value - The value of the card.
 */
class Card {
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    };
}

/**
 * Defines a suit.
 * @constructor
 * @param {string} suit - The name of the suit.
 */
class Suit {
    constructor(suit) {
        this.suit = suit;
    }

    static suit(suit) {
        return [
            {suit, name: "Ace", value: 11},
            {suit, name: "Two", value: 2},
            {suit, name: "Three", value: 3},
            {suit, name: "Four", value: 4},
            {suit, name: "Five", value: 5},
            {suit, name: "Six", value: 6},
            {suit, name: "Seven", value: 7},
            {suit, name: "Eight", value: 8},
            {suit, name: "Nine", value: 9},
            {suit, name: "Ten", value: 10},
            {suit, name: "Jack", value: 10},
            {suit, name: "Queen", value: 10},
            {suit, name: "King", value: 10}
        ];
    }
}


/**
 * Starting a new game.
 * @param {number} numberOfPlayers - The number of players playing this game.
 */

let startGame = (numberOfPlayers) => {
    return `Playing a game of Blackjack with ${numberOfPlayers} players!`;
};




/**
 * Shuffle a deck of cards.
 * @param {Object} deck - Returns a list of 52 cards of 4 suits in a random order.
 */

let shuffle = (deck) => {
    return
};

/**
 * Deal a card.
 * @param {number} min - Minimum value per suit (1).
 * @param {number} max - Maximum value per suit (12).
 */

let dealCard = (min, max, remainingCards) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log( startGame(4) );
console.log( new Card("clubs", "Four", 4) );
console.log( Suit.suit("hearts"));
console.log( Suit.suit("diamonds"));
console.log( Suit.suit("clubs"));
console.log( Suit.suit("spades"));
// console.log( dealCard(1, 12, deck) );