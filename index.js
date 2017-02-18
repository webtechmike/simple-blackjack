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
 * Defines a suit and returns an array of 13 cards Ace through King in given suit.
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
 * Create the deck out of 4 suits of 13 cards each.
 */
let deck = () => {
    let newDeck = [];
    let hearts = Suit.suit("hearts");
    let diamonds = Suit.suit("diamonds");
    let clubs = Suit.suit("clubs");
    let spades = Suit.suit("spades");
    return newDeck.concat(hearts, diamonds, clubs, spades);
};

/**
 * Announce starting a new game.
 * @param {number} numberOfPlayers - The number of players playing this game.
 */

let startGame = (numberOfPlayers) => {
    return `Playing a game of Blackjack with ${numberOfPlayers} players!`;
};

/**
 * Shuffle a deck of cards.
 * @param {array} aDeck - Returns a list of 52 cards of 4 suits in a random order.
 */

let shuffle = (aDeck) => {
    for(let i = 0; i < aDeck.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (aDeck.length - i));

        let temp = aDeck[j];
        aDeck[j] = aDeck[i];
        aDeck[i] = temp;
    }
    return aDeck;
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
let myDeck = deck();
console.log( shuffle( myDeck ) );

// console.log( shuffle(deck) );
// console.log( dealCard(1, 12, deck) );