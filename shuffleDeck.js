const shuffleDeck = function(deck) {
  let newDeck = deck.slice();
  for (let i = 0; i < 52; i++) {
    let X = Math.floor(Math.random() * deck.length);
    let next = deck[X];
    deck = deck.slice(0, X).concat(deck.slice(X + 1));
    newDeck.push(next);
  }
  return newDeck;
};

var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

shuffleDeck(orderedDeck());
