'use strict';

/**
 * A simple game of blackjack
 */

/**
 * Store number of players in a variable to reuse later.
 */
let playerCount = 4;


/**
 * A player
 * @constructor
 * @param {string} name - The name of the player.
 * @param {object} hand - The hand of the player (2 cards and their total value).
 */
class Player {
    constructor(name, hand) {
        this.name = name;
        this.hand = hand;
    }
}

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
 * @param {Array} aDeck - Returns a list of 52 cards of 4 suits in a random order.
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
 * Deals two random cards to each player including the dealer and returns the results.
 * @param {Array} shuffledDeck - A shuffled deck.
 * @param {number} numPlayers - The number of players.
 */

let dealRound = (shuffledDeck, numPlayers) => {
    let players = [];
    for(let i = 0; i < numPlayers; i++) {
        players.push( new Player("random", {}) );
    }

    players.forEach((player, i) => {
        let card1 = shuffledDeck[i];
        let card2 = shuffledDeck[i+1];
        player.hand = {card1: JSON.stringify(card1), card2: JSON.stringify(card2), total: card1.value + card2.value};
    });
    return players;
};

/**
 * Get candidates from game results return players who scored 21 or less.
 * @param {Array} results - The results of the round.
 */

let getCandidates = () => {
    return (candidate) => {
        return candidate.hand.total <= 21;
    };
};

/**
 * Get winner(s)
 * @param {Array} candidates - The result of getCandidates.
 */

let getWinner = (candidates) => {
    let topScore = Math.max.apply(Math, candidates.map((candidate) => {
        return candidate.hand.total;
    }));

    let winner = candidates.find((candidate) => {
        return candidate.hand.total == topScore;
    });

    return winner;
};

console.log( startGame(playerCount) );
let myDeck = deck();

// announce the round
let game = dealRound(shuffle( myDeck ), playerCount);

// announce the candidates who stayed under 21
let possibleWinners = game.filter(getCandidates());

console.log("possibleWinners:", possibleWinners);
console.log("Winner:", getWinner(possibleWinners));
// console.log( "Winner:", getWinner(game));