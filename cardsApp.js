const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

//   Display data
// on click: flip cards
// Get info for new cards from teh suer
// Delete cards
// Animate card flip
// Display an error message if form fields are blank
  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
    },
    methods: {
        toggleCard: function(card) {
            card.flipped = !card.flipped;
        }
    }
  });