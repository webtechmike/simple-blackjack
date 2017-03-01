'use strict';

/**
 * A simple game of blackjack
 * Open this file in a terminal window and run with node.
 * For example download or copy / paste and save the file to your desktop then run... (cd ~/Desktop && node index.js)
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
 * @param {number} numberOfPlayers - The number of players, including the dealer, playing this game.
 */

function startGame(numberOfPlayers) {
    return `Playing a game of Blackjack with ${numberOfPlayers} players!`;
}


/**
 * Shuffle a deck of cards.
 * @param {Array} aDeck - Returns a list of 52 cards of 4 suits in a random order.
 */

function shuffle(aDeck) {
    for(let i = 0; i < aDeck.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (aDeck.length - i));

        let temp = aDeck[j];
        aDeck[j] = aDeck[i];
        aDeck[i] = temp;
    }
    return aDeck;
}

/**
 * Deals two random cards to each player including the dealer and returns the results.
 * @param {Array} shuffledDeck - A shuffled deck.
 * @param {number} numPlayers - The number of players.
 */

function dealRound(shuffledDeck, numPlayers) {
    let players = [];
    // push dealer as new player
    players.push(new Player("dealer", {}));

    // push user as new player
    players.push(new Player("player", {}));

    // push remaining players numPlayers - 2
    for(let i = 0; i < numPlayers - 2; i++) {
        players.push( new Player(`random${i + 1}`, {}) );
    }

    players.forEach((player, i) => {
        let card1 = shuffledDeck[i];
        let card2 = shuffledDeck[i+1];
        player.hand = {card1: JSON.stringify(card1), card2: JSON.stringify(card2), total: card1.value + card2.value};
    });
    return players;
}

/**
 * Get candidates from game results return players who scored 21 or less.
 */

function getCandidates() {
    return (candidate) => {
        return candidate.hand.total <= 21;
    };
}

/**
 * Get winner(s)
 * @param {Array} candidates - The result of getCandidates.
 */

function getWinner(candidates) {
    let topScore = Math.max.apply(Math, candidates.map((candidate) => {
        return candidate.hand.total;
    }));

    let winners = candidates.filter((candidate) => {
        return candidate.hand.total === topScore;
    });

    return winners;
}

let myDeck = deck();

// announce the round
let game = dealRound(shuffle( myDeck ), playerCount);

// announce the candidates who stayed under 21
let possibleWinners = game.filter(getCandidates());
let winner = getWinner(possibleWinners);

// console.log("possibleWinners:", possibleWinners);
// console.log("Winner:", winner);

/**
 * Finds players accordingly
 * @param {string} name - Finds the player by name.
 */
function findPlayer(name) {
    return (player) => {
        return player.name === name;
    };
}


/**
 * Announce the game results.
 * @param {Array} game - The results of the game
 */
function announceTheGame(game) {
    console.log( startGame(playerCount) );
    let dealer = game.filter(findPlayer("dealer"));
    let player = game.filter(findPlayer("player"));
    let random1 = game.filter(findPlayer("random1"));
    let random2 = game.filter(findPlayer("random2"));

    // console.log("your first card", typeof player[0].hand.card1, JSON.parse(player[0].hand.card1).name);

    // log out player's hand
    console.log(`Your hand: ${JSON.parse(player[0].hand.card1).name} of ${JSON.parse(player[0].hand.card1).suit}, ${JSON.parse(player[0].hand.card2).name} of ${JSON.parse(player[0].hand.card2).suit} (total = ${player[0].hand.total})`);

    // log out random2's hand
    console.log(`Player 1's hand: ${JSON.parse(random1[0].hand.card1).name} of ${JSON.parse(random1[0].hand.card1).suit}, ${JSON.parse(random1[0].hand.card2).name} of ${JSON.parse(random1[0].hand.card2).suit} (total = ${random1[0].hand.total})`);

    // log out random2's hand
    console.log(`Player 2's hand: ${JSON.parse(random2[0].hand.card1).name} of ${JSON.parse(random2[0].hand.card1).suit}, ${JSON.parse(random2[0].hand.card2).name} of ${JSON.parse(random2[0].hand.card2).suit} (total = ${random2[0].hand.total})`);

    // log out dealer's hand
    console.log(`Dealer's hand: ${JSON.parse(dealer[0].hand.card1).name} of ${JSON.parse(dealer[0].hand.card1).suit}, ${JSON.parse(dealer[0].hand.card2).name} of ${JSON.parse(dealer[0].hand.card2).suit} (total = ${dealer[0].hand.total})`);

    // log out who won
    if(winner[0].name === "player") {
        console.log("You win!");
    } else if (winner[0].name === "dealer") {
        console.log("Dealer wins!");
    } else if (winner[0].name === "random1") {
        console.log("Player 1 wins!");
    } else if (winner[0].name === "random2") {
        console.log("Player 2 wins!")
    }
}

announceTheGame(game);
