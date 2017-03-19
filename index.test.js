var assert = chai.assert;
var expect = chai.expect;

describe('Game', () => {
    it('should be an array of player objects', () => {
        expect(game).to.be.an('array');
    });
    it('should contain an object for each player', () => {
        assert.equal(game.length, playerCount);
    });
    it('should have at least one winner', () => {
        expect(winner).to.have.length.above(0);
    });
    it('should have a dealer', () => {
        expect(game[0].name).to.equal('dealer');
    });
});

describe('Deck', () => {
    it('should have 52 cards', () => {
        assert.equal(deck().length, 52);
    });
    it('should be an array of cards', () => {
        expect(deck()).to.be.an('array');
    });
    it('should be able to be shuffled', () => {
        expect([ shuffle(deck())[0].value, shuffle(deck())[1].value, shuffle(deck())[2].value ]).to.not.equal([1, 2, 3]);
    });
});

describe('Player', () => {
    it('should have a name', () => {
        expect(game[0].name).to.exist;
    });
    it('should have a hand', () => {
        expect(game[0].hand).to.exist;
    });
});
